import './App.css';
import React from 'react';
import {useMouse} from './hooks/hooks'
import {useRef, useEffect} from "react";


const App = () => {
    // useState 的使用
    const mouse = useMouse()
    const target = useRef(null)
    useEffect(()=>{
        target.current.focus()
    },[])
    return (
        <React.Fragment>
            <input type="text" ref={target}/>
            <div className={'container'}>
                <h3>{JSON.stringify(mouse)}</h3>
            </div>
        </React.Fragment>
    )
}

export default App;
