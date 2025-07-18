import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetAllPosts() {
    const [posts,setPosts] = useState([])
    const [change,setChange] = useState()
    useEffect(()=>{
        async function getData(params) {
            let res = await axios.get('http://localhost:3000/posts')
            console.log(res.data)
            setPosts(res.data)
        }
        getData()
    },[change])
    async function deletePost(id) {
        let res = await axios.delete('http://localhost:3000/posts/'+id) 
        setChange(id)        
    }
  return (
    <div>
        {posts.map((post,index)=>{
            return <div className='container border border-1' key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <button onClick={()=>deletePost(post.id)}>delete</button>
            </div> 
        })}
    </div>
  )
}

export default GetAllPosts