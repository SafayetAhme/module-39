import { useState } from "react"


export default function Counter(){
    const [count, setCount] = useState(0);
    
    const handleradd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handlerdelate = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style= {{border: '2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleradd}>Add</button>
            <button onClick={handlerdelate}>delate</button>
        </div>
    )
}

