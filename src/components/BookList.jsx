import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/booklist.css'
export const BookList = () => {

  const [books,setBooks]=useState([])
  useEffect(()=>{
    let fetchdata= async()=>{
      let response=await fetch("http://localhost:4001/books")
      let data=await response.json()
      setBooks(data)
    }
fetchdata()
  })
  let delebook=(id)=>{
fetch(`http://localhost:4001/books/${id}`,{method:'DELETE'})
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
          <Link to={`/admin/booklist/${item.id}`}><button className='readbtn'>ReadMore</button></Link>
          <button  onClick={()=>delebook(item.id)}>Remove</button>
        </div>
      </div>
      

      )}
    </div>
  )
}
