import styles from './index.module.scss'
import ReactQuill from 'react-quill'
import { rules } from '@/utils/validate'
import 'react-quill/dist/quill.snow.css'

import { Card, Breadcrumb, Form, Button, Input, Space, Radio, Upload, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useHistory, useParams } from 'react-router-dom'
import Channels from '@/components/Channels'
import { useState } from 'react'
import { addArticle, editArticle, getArticle } from '@/store/actions/publish'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Publish = () => {
	const [fileList, setFileList] = useState([])
	const [type, setType] = useState(1)
	const dispatch = useDispatch()
	const history = useHistory()
	const params = useParams()
	const [form] = Form.useForm()

	useEffect(() => {
		const setFormData = async () => {
			if (params.id) {
				// request 回显
				const { title, cover, content, channel_id } = await dispatch(getArticle(params.id))
				form.setFieldsValue({ title, content, channel_id })
				setType(cover.type)
				setFileList(cover.images.map(item => ({ url: item })))
			} else {
				// 初始化数据
				setFileList([])
				setType(1)
				form.resetFields()
			}
		}
		setFormData()
	}, [dispatch, form, params.id])

	const onchangeType = e => {
		setType(e.target.value)
		setFileList([])
	}

	const onUploadChange = ({ fileList }) => {
		setFileList(fileList)
	}

	const onFinishFunction = async (data, draft = false) => {
		if (type !== fileList.length) return message.error('请按照选择的封面类型上传图片')
		const reqParams = {
			...data,
			cover: {
				type,
				images: fileList.map(item => item?.response?.data?.url || item.url),
			},
		}
		if (params.id) {
			reqParams.id = params.id
			await dispatch(editArticle(reqParams, draft))
		} else {
			await dispatch(addArticle(reqParams, draft))
		}
		message.success('保存成功')
		history.push('/article')
	}

	const saveDarft = async () => {
		try {
			const values = await form.validateFields()
			onFinishFunction(values, true)
		} catch (e) {}
	}

	return (
		<>
			<div className={styles.root}>
				<Card
					title={
						<Breadcrumb>
							<Breadcrumb.Item>
								<Link to="/">首页</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
								<Link to="/article">内容管理</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item>{params.id ? '修改文章' : '发布文章'}</Breadcrumb.Item>
						</Breadcrumb>
					}
				>
					<Form form={form} labelCol={{ span: 4 }} onFinish={onFinishFunction}>
						<Form.Item label="文章标题：" name="title" rules={rules.title}>
							<Input placeholder="请输入文章标题" style={{ width: 400 }} />
						</Form.Item>
						<Form.Item label="所属频道：" name="channel_id" rules={rules.channle}>
							<Channels width={400}></Channels>
						</Form.Item>
						<Form.Item label="文章封面：">
							{/* 一个FormItem只能有一个元素 */}
							<Form.Item style={{ marginBottom: 0 }}>
								<Radio.Group value={type} onChange={onchangeType}>
									<Radio value={1}>单图</Radio>
									<Radio value={3}>三图</Radio>
									<Radio value={0}>无图</Radio>
								</Radio.Group>
							</Form.Item>
							{type > 0 ? (
								<div style={{ marginTop: 16 }}>
									<Upload name="image" listType="picture-card" action="http://geek.itheima.net/v1_0/upload" fileList={fileList} onPreview={() => {}} onChange={onUploadChange}>
										{fileList.length < type ? (
											<div>
												<PlusOutlined />
												<div style={{ marginTop: 8 }}>Upload</div>
											</div>
										) : null}
									</Upload>
								</div>
							) : null}
						</Form.Item>
						<Form.Item label="文章内容：" wrapperCol={{ span: 16 }} rules={rules.articleContent} name="content" initialValue="">
							<ReactQuill placeholder="请输入文章内容" />
						</Form.Item>
						<Form.Item wrapperCol={{ offset: 4 }}>
							<Space>
								<Button type="primary" htmlType="submit">
									{params.id ? '修改文章' : '发布文章'}
								</Button>
								<Button onClick={saveDarft}>存入草稿</Button>
							</Space>
						</Form.Item>
					</Form>
				</Card>
			</div>
		</>
	)
}

export default Publish
