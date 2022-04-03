import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const FriendDetail = () => {
    const {friendId} = useParams()
    const [friend , setFriend] = useState({})
    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=>setFriend(data))

    },[])
    return (
        <div>
            <h2>This is a detail of friend</h2>
            <h1> I am id no :{friendId}</h1>
            <h3>{friend.name}</h3>
            <h3>{friend.email}</h3>
            <h3>{friend.website}</h3>
            <h3>{friend.address?.city}</h3>
            <h3>{friend.address?.geo?.lat}</h3>
        </div>
    );
};

export default FriendDetail;