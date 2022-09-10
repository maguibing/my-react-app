import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Layout}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route>404</Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
