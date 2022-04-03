import React from 'react';
import { Link, useNavigate} from 'react-router-dom'
function Friend(props) {
    const {username ,name, id} = props.friend
const nevigate = useNavigate()

const showFriendInfo = ()=>{
   const path = `/friend/${id}`
   nevigate(path)
}

    return (
        <div style={{border:'2px solid green', margin:'20px',padding:'10px'}}>
            <p>{name}</p>
            <Link style={{border:'2px solid black'}} to={"/friend/"+id}>Show detail</Link>
            <p></p>
            <button onClick={showFriendInfo}>{username}  Id:{id}</button>
        </div>
    );
}

export default Friend;