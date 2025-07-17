import React, { useState } from 'react'
import GetAllProducts from './GetAllProducts'
import GetSingleProduct from './GetSingleProduct'
let tabs =["Get All Product","Single Product"]

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

    </div>
  )
}

export default Tabcomp