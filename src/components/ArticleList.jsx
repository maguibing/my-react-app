import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getArticleList } from '../store/actions/article'

const ArticleList = () => {
    const activeId = useSelector(state => state.channel.activeId)
    const acticleList = useSelector(state => state.articleList)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getArticleList(activeId))
    }, [dispatch, activeId])

    return (
        <>
            <div className="list">
                {acticleList.map(v => (
                    <div className="article_item" key={v.art_id}>
                        <h3>{v.title}</h3>
                        <div className="img_box">
                            <img src={v.cover?.images?.[0]} className="w100" alt="" />
                        </div>
                        <div className="info_box">
                            <span>{v.art_id}</span>
                            <span>{v.comm_count}评论</span>
                            <span>{v.pubdate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ArticleList
