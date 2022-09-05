import './App.css';
import React, {useState} from 'react';
import {useRef, useEffect, useContext} from "react";
// import  store from './store'
// 使用useContext

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
