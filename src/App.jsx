import './App.css';
import React from 'react';
import {useMouse} from './hooks/hooks'
import {useRef, useEffect} from "react";
// 使用useContext
import Context from './hooks/useContext'

const App = () => {
    // useState 的使用
    const mouse = useMouse()
    const target = useRef(null)
    /**
     * vue3 + vite + typesript + pinia + vueRouter4
     */
    useEffect(() => {
        target.current.focus()
    }, [])
    return (
        <Context.Provider>
            <React.Fragment>
                <input type="text" ref={target}/>
                <div className={'container'}>
                    <h3>{JSON.stringify(mouse)}</h3>
                    <h3>{JSON.stringify(mouse)}</h3>
                </div>
            </React.Fragment>
        </Context.Provider>

    )
}

export default App;
