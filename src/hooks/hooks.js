import {useState, useEffect} from 'react'

export const useMouse = () => {
    const [mouse, setMouse] = useState({x: 0, y: 0})
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouse({
                x: e.pageX,
                y: e.pageY,
            })
        }
        window.document.addEventListener('mousemove', handleMouseMove)
        return ()=>{
            window.document.removeEventListener("mousemove",handleMouseMove)
        }
    }, [])

    return mouse
};