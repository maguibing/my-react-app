import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import AuthRoute from '@/components/AutoRoute'
const App = () => {
    return (
        <Router>
            <div className="App" style={{ height: 100 + 'vh' }}>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <AuthRoute path="/" component={Layout}></AuthRoute>
                    <Route>404</Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
