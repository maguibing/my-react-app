import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getChannelList } from '@/store/actions/article'
import { Select } from 'antd'

const Channels = ({ width, value, onChange }) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getChannelList())
	}, [dispatch])

	const channels = useSelector(state => state.article.channelList)
	return (
		<>
			<Select value={value} onChange={e => onChange(e)} placeholder="请选择所属频道" style={width ? { width } : null}>
				{channels.map(item => (
					<Select.Option key={item.id} value={item.id}>
						{item.name}
					</Select.Option>
				))}
			</Select>
		</>
	)
}

export default Channels
