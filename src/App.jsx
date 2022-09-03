import './App.css';
import React, {useState} from 'react';
import Header from './compents/Header'
import Main from './compents/Main'
import Footer from './compents/Footer'


// import {useSelector, useDispatch} from 'react-redux'
// import {useMouse} from './hooks/hooks'
// import {useRef, useEffect, useContext} from "react";
// import  store from './store'
// import Context from './hooks/useContext'


const App = () => {
    return (
        <React.Fragment>
            <section className="todoapp">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </section>
        </React.Fragment>
    )
}


export default App;
