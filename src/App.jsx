import './App.css';
import React, {useState} from 'react';
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

    const changeName = () => {
        setUser({
            ...user,
            name: "hangman"
        })
    }


    return (
        <Context.Provider value={{user}}>
            <React.Fragment>
                <input type="text" ref={target}/>
                <div className={'container'}>
                    <h3>{JSON.stringify(mouse)}</h3>
                </div>
                <hr/>
                <Child></Child>
                <hr/>
                <button onClick={changeName}>按钮</button>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </React.Fragment>
        </Context.Provider>
    )
}


const Child = () => {
    return (
        <React.Fragment>
            <GrandChild></GrandChild>
        </React.Fragment>
    )
}

const GrandChild = () => {
    const {user} = useContext(Context)
    return (
        <React.Fragment>
            <div className={'grandChild'}>
                {JSON.stringify(user.name)}
            </div>
        </React.Fragment>
    )
}

export default App;
