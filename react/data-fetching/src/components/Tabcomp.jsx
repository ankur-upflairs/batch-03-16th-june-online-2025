import React, { useState } from 'react'
import GetAllProducts from './GetAllProducts'
import GetSingleProduct from './GetSingleProduct'
import CreatePost from './CreatePost'
import GetAllPosts from './GetAllPosts'
let tabs =["Get All Product","Single Product","Create Post","Get all posts"]

function Tabcomp() {
    const [selectedTab,setSelectedTab] = useState(0)
  return (
    <div className='container'>
        <ul className='row'>
            {tabs.map((v,i)=>{
            return <li onClick={e=>setSelectedTab(i)} className='col'>   {v}   </li>
        })}
        </ul>
        {selectedTab ==0 && <GetAllProducts />}
        {selectedTab ==1 && <GetSingleProduct />}
        {selectedTab ==2 && <CreatePost />}
        {selectedTab ==3 && <GetAllPosts />}

    </div>
  )
}

export default Tabcomp