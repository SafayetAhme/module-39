// import { useEffect, useState } from 'react'
// import './friends.css'
// import Friend from './friend'
//  export default function Friends(){

import { useEffect, useState } from "react"
import Friend from "./friend"

//     const [Friends, setFriends] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => setFriends(data))
//     },[])

//     return(
//         <div className="box">
//             <h3>Friends: {Friends.length}</h3>
//             {
//                 Friends.map(friend => <Friend friend={friend}></Friend>)
//             }
//         </div>
//     )
//  }



export default function Friends(){

    const [Friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return(
        <dvi>
            <h3>Firends: {Friends.length}</h3>
            {
                Friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </dvi>
    )
}