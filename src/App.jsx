import './App.css';
import React, {useState} from 'react';
<<<<<<< HEAD
import Header from './compents/Header'
import Main from './compents/Main'
import Footer from './compents/Footer'


// import {useSelector, useDispatch} from 'react-redux'
// import {useMouse} from './hooks/hooks'
// import {useRef, useEffect, useContext} from "react";
// import  store from './store'
// import Context from './hooks/useContext'
=======
import {useMouse} from './hooks/hooks'
import {useRef, useEffect, useContext} from "react";
// import  store from './store'
// 使用useContext
import Context from './hooks/useContext'

const App = () => {
    // useState 的使用
    const mouse = useMouse()
    const target = useRef(null)

    const [count, setCount] = useState(0)
    const inputRef = useRef(count)

    useEffect(() => {
        inputRef.current = count
    }, [count])

    const [user, setUser] = useState({name: "zs", age: 18})

    /**
     * vue3 + vite + typesript + pinia + vueRouter4
     */
    useEffect(() => {
        target.current.focus()
    }, [])
>>>>>>> ef944c63d817a97ed32936ddcca871e7fcaa2973


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
