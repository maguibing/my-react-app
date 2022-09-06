import './App.css';
import React from 'react';


import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


const App = () => {
    return (
        <section className="todoapp">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
      </section>
    )
}



export default App;
