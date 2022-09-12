import { Layout, Menu, Popconfirm, Button } from 'antd'
import { Switch, Route, Link, Redirect, useLocation, useHistory } from 'react-router-dom'
import { PieChartOutlined, SolutionOutlined, FileWordOutlined, LogoutOutlined } from '@ant-design/icons'
import { getUserInfo, logOut } from '@/store/actions/user'
import NotFound from '@/pages/NotFound'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'
import Dashboard from '@/pages/Dashboard'

import './index.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const { Header, Sider, Content } = Layout
const GeekLayout = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const name = useSelector(state => state.user.name)
    let activeKey = location.pathname
    if (activeKey.startsWith('/publish')) activeKey = '/publish'
    // 退出登录
    const onLogout = () => {
        dispatch(logOut())
        history.push('/')
    }

    useEffect(() => {
        dispatch(getUserInfo())
    }, [dispatch])

    const items = [
        { label: <Link to="/dashboard">数据面板</Link>, key: '/dashboard', icon: <PieChartOutlined /> },
        { label: <Link to="/article">内容管理</Link>, key: '/article', icon: <SolutionOutlined /> },
        { label: <Link to="/publish">发布文章</Link>, key: '/publish', icon: <FileWordOutlined /> },
    ]
    return (
        <Layout className="geek-layout">
            <Sider width={200}>
                <div className="logo">GEEK</div>
                <Menu defaultSelectedKeys={[activeKey]} mode="inline" theme="dark" items={items}></Menu>
            </Sider>
            <Layout>
                <Header>
                    <span style={{ fontSize: 16 }}>Geek</span>
                    <div>
                        <span>{name}</span>
                        <Popconfirm placement="bottomRight" onConfirm={onLogout} title="您确认退出Geek吗？" okText="确认" cancelText="取消">
                            <Button type="link" icon={<LogoutOutlined />}>
                                退出
                            </Button>
                        </Popconfirm>
                    </div>
                </Header>
                <Content>
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/dashboard"></Redirect>}></Route>
                        <Route path="/dashboard">
                            <Dashboard></Dashboard>
                        </Route>
                        <Route path="/article">
                            <Article></Article>
                        </Route>
                        <Route path="/publish/:id?">
                            <Publish></Publish>
                        </Route>
                        <Route>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default GeekLayout
