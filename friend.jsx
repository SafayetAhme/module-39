// export default function Friend({friend}){
//     const {name, email} = friend;
//     return (
//         <div className="box">
//             <h4>Name: {name}</h4>
//             <p>Email: {email}</p>
//         </div>
//     )
// }


export default function Friend({friend}){
    const {name, email} = friend
    return(
        <div>
            <h3>name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    )
}