import styles from './index.module.scss'
import { Form, Button, Card, Breadcrumb, Radio, DatePicker, Image, Tag, Modal, message } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Table, Space } from 'antd'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelList, getArticles, delArticles } from '@/store/actions/article'
import Channels from '@/components/Channels'

const Article = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const statusLabel = [
		{ text: '草稿', color: 'default' },
		{ text: '待审核', color: 'blue' },
		{ text: '审核通过', color: 'green' },
		{ text: '审核拒绝', color: 'red' },
	]
	const columns = [
		{
			title: '封面',
			dataIndex: 'cover',
			key: 'cover',
			render: cover => <Image src={cover?.images?.[0] || 'http://iph.href.lu/200x120?text='} style={{ objectFit: 'cover' }} width={200} height={120} />,
		},
		{
			title: '标题',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: '状态',
			dataIndex: 'status',
			key: 'status',
			render: status => {
				const int = statusLabel[status]
				return <Tag color={int.color}>{int.text}</Tag>
			},
		},
		{
			title: '发布时间',
			dataIndex: 'pubdate',
			key: 'pubdate',
		},
		{
			title: '阅读数',
			dataIndex: 'read_count',
			key: 'read_count',
		},
		{
			title: '评论数',
			dataIndex: 'comment_count',
			key: 'comment_count',
		},
		{
			title: '点赞数',
			dataIndex: 'like_count',
			key: 'like_count',
		},
		{
			title: '操作',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<Button type="link" onClick={() => editArticle(record.id)} icon={<EditOutlined />} />
					<Button type="link" onClick={() => delArticle(record.id)} icon={<DeleteOutlined />} />
				</Space>
			),
		},
	]
	const reqParams = useRef({
		page: 1,
		per_page: 20,
		channel_id: undefined,
		status: undefined,
		begin_pubdate: undefined,
		end_pubdate: undefined,
	})
	useEffect(() => {
		dispatch(getChannelList())
		dispatch(getArticles(reqParams.current))
	}, [dispatch])

	const onFinish = data => {
		reqParams.current.status = data.status
		reqParams.current.channel_id = data.channel_id
		reqParams.current.page = 1
		if (data.dateArr) {
			reqParams.current.begin_pubdate = data.dateArr[0].format('YYYY-MM-DD HH:mm:ss')
			reqParams.current.end_pubdate = data.dateArr[1].format('YYYY-MM-DD HH:mm:ss')
		}
		dispatch(getArticles(reqParams.current))
	}

	const onPageChange = (page, pageSize) => {
		reqParams.current.page = page
		reqParams.current.per_page = pageSize
		dispatch(getArticles(reqParams.current))
	}

	// 删除文章
	const delArticle = id => {
		Modal.confirm({
			title: '您是否确认删除该文章？',
			cancelText: '取消',
			okText: '确认',
			onOk: async () => {
				await dispatch(delArticles(id))
				await dispatch(getArticles(reqParams.current))
				message.success('删除成功')
			},
		})
	}

	// 编辑文章
	const editArticle = id => {
		history.push(`/publish/${id}`)
	}

	const { results, total_count, page, per_page } = useSelector(state => state.article)
	return (
		<>
			<div className={styles.root}>
				<Card
					title={
						<Breadcrumb>
							<Breadcrumb.Item>
								<Link to="/">首页</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item>内容管理</Breadcrumb.Item>
						</Breadcrumb>
					}
				>
					<Form onFinish={onFinish}>
						<Form.Item label="状态：" name="status">
							<Radio.Group>
								<Radio value={undefined}>全部</Radio>
								<Radio value={0}>草稿</Radio>
								<Radio value={1}>待审核</Radio>
								<Radio value={2}>已通过</Radio>
								<Radio value={3}>已拒绝</Radio>
							</Radio.Group>
						</Form.Item>
						<Form.Item label="频道：" name="channel_id">
							<Channels width={288}></Channels>
						</Form.Item>
						<Form.Item label="日期：" name="dateArr">
							<DatePicker.RangePicker />
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								筛选
							</Button>
						</Form.Item>
					</Form>
				</Card>

				<Card title={`根据筛选条件共查询到 ${total_count} 条结果：`} style={{ marginTop: 24 }}>
					<Table
						rowKey="id"
						pagination={{
							current: page,
							pageSize: per_page,
							total: total_count,
							onChange: onPageChange,
						}}
						columns={columns}
						dataSource={results}
					></Table>
				</Card>
			</div>
		</>
	)
}

export default Article
