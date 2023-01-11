import './App.css'
import { Suspense, lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import AuthRoute from '@/components/AutoRoute'
import { customHistory } from './utils/history'

// import Login from '@/pages/Login'
// import Layout from '@/pages/Layout'

const Login = lazy(() => import('@/pages/Login'))
const Layout = lazy(() => import('@/pages/Layout'))

const App = () => {
	return (
		<Router history={customHistory}>
			<Suspense fallback={<div style={{ marginTop: 200, textAlign: 'center' }}>loading ~</div>}>
				<div className="App" style={{ height: 100 + 'vh' }}>
					<Switch>
						<Route path="/login" component={Login}></Route>
						<AuthRoute path="/" component={Layout}></AuthRoute>
						<Route>404</Route>
					</Switch>
				</div>
			</Suspense>
		</Router>
	)
}

export default App
