import React, { useEffect, useState } from 'react';
import Friend from './Friend';
function Friends(props) {
 const [friends , setFriends] = useState([])

 useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setFriends(data))
 },[])
    
    return (
        <div>
            <h1> Hello I am one of your friends</h1>
            <h4>{friends.length}</h4>
            {
                friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
}

export default Friends;