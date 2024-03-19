import axios from 'axios'
import React, { useState,useEffect } from 'react'

function Blog() {
const [data,setData] = useState([])
  
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
    console.log(response.data)
    setData(response.data)
  })  }, [])



  return (
    <div>
      <h1>Blog</h1>
     
     {data.map((datas,index)=>{
       return(
      <a href="" key={index} style={{ color:"black"}}><br/>
      <h3>{datas.title}</h3>
      <h4>{datas.body}</h4>
      </a>
       ) 
      })}
     
    </div>
  )
}

export default Blog
