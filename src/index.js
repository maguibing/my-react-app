import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'

import {Provider} from 'react-redux'
import store from './store'

import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
        <Provider store={store}>
            <ConfigProvider  locale={locale}>
                <App/>
            </ConfigProvider>
        </Provider>
)

reportWebVitals()
