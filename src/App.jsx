import './App.css'
import React from 'react'

// import Header from './components/Header'
// import Main from './components/Main'
// import Footer from './components/Footer'

import Channel from './components/Channel'
import ArticleList from './components/ArticleList'

const App = () => {
    return (
        <section className="todoapp">
            {/* <Header></Header>
            <Main></Main>
            <Footer></Footer> */}
            <Channel></Channel>
            <ArticleList></ArticleList>
        </section>
    )
}

export default App
