import styles from './index.module.scss'
import ReactQuill from 'react-quill'
import { rules } from '@/utils/validate'
import 'react-quill/dist/quill.snow.css'

import { Card, Breadcrumb, Form, Button, Input, Space, Radio, Upload, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import Channels from '@/components/Channels'
import { useState } from 'react'
import { addArticle } from '@/store/actions/puhlish'
import { useDispatch } from 'react-redux'

const Publish = () => {
	const [fileList, setFileList] = useState([])
	const [type, setType] = useState(1)
	const dispatch = useDispatch()
	const history = useHistory()

	const onchangeType = e => {
		setType(e.target.value)
		setFileList([])
	}

	const onUploadChange = ({ fileList }) => {
		setFileList(fileList)
	}

	const onFinishFunction = data => {
		if (type !== fileList.length) return message.error('请按照选择的封面类型上传图片')
		const reqParams = {
			...data,
			cover: { type, images: fileList.map(item => item.response.data.url) },
		}
		dispatch(addArticle(reqParams))
		history.push('/article')
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
							<Breadcrumb.Item>发布文章</Breadcrumb.Item>
						</Breadcrumb>
					}
				>
					<Form labelCol={{ span: 4 }} onFinish={onFinishFunction}>
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
									发表文章
								</Button>
							</Space>
						</Form.Item>
					</Form>
				</Card>
			</div>
		</>
	)
}

export default Publish
