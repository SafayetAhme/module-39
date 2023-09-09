import { useState } from "react"

export default function Team(){

    const [count, setCount] = useState(11)

    const handlerplayeradd = () =>{
        const addcounter = count + 1;
        setCount(addcounter)
    }

    const handleremoveplayer = () =>{
        const addcounter = count - 1;
        setCount(addcounter)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return(
        <div style={teamStyle}>
            <h3>Players: {count}</h3>
            <button onClick={handlerplayeradd}>Player Add</button>
            <button onClick={handleremoveplayer}>remove player</button>
        </div>
    )
}