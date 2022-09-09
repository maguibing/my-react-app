import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getChannel, chagneActive } from '../store/actions/channel'
import classNames from 'classnames'

const Channel = () => {
    const channelList = useSelector(state => state.channel.list)
    const activeId = useSelector(state => state.channel.activeId)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getChannel())
    }, [dispatch])

    return (
        <>
            <ul className="category">
                {channelList.map(v => (
                    <li className={classNames({ select: v.id === activeId })} onClick={() => dispatch(chagneActive(v.id))} key={v.id}>
                        {v.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Channel
