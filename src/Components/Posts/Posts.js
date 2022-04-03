import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Posts() {
  const [posts , setPosts] = useState([])

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data=>setPosts(data))
  },[])
     
  return (
    <div>
      <h1> I want to make money by posting {posts.length}</h1>
      {
        posts.map(post=><Link key={post.id} to={`/post/${post.id}`}> {post.id}</Link>)
      }
      <Outlet></Outlet>
    </div>
  )
}
