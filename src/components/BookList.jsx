import React,{useEffect,useState} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import '../styles/booklist.css'
export const BookList = () => {
let loc=useLocation()
let nevigator=useNavigate();
let readbtn=(id)=>{
if(loc=='/admin/booklist'){
nevigator(`/admin/booklist/${id}`)
}
else{
  nevigator(`/user/booklist/${id}`)
}}
  const [books,setBooks]=useState([])
  useEffect(()=>{
    let fetchdata= async()=>{
      let response=await fetch("https://libdata.onrender.com/books")
      let data=await response.json()
      setBooks(data)
    }
fetchdata()
  })
  let delebook=(id)=>{
fetch(`https://libdata.onrender.com/books/${id}`,{method:'DELETE'})
alert("deleted sucsess")
  }
  return (
    <div className='booklist'>
      
      {books.map((item)=>
      <div className='bookcard'>
        <div>
          <img className="imgbookcard" src={item.imageLink} alt="" />
        </div>
        <div className="content">
          <div className="title" style={{fontWeight:"bolder",fontSize:"19px"}}>{item.title}</div>
          {item.author!=='Unknown'&&<div className="auth" style={{fontSize:"12px"}}><span style={{fontSize:"16px"}}>Author: </span>{item.author}</div>}
          <div className="pageno"><span style={{fontWeight:"500"}}>Pages: </span>{item.pages}</div>
          <div className="lang"><span style={{fontWeight:"500"}}>Languages: </span>{item.language}</div>
          <button onClick={()=>readbtn(item.id)} className='readbtn'>ReadMore</button>

          {loc.pathname=='/admin/booklist'&&<button style={{borderRadius:"8px"}} onClick={()=>delebook(item.id)}>Remove</button>}
        </div>
      </div>
      

      )}
    </div>
  )
}
