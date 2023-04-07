import React,{useEffect,useState} from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import '../styles/readbook.css'
export const Readbook = () => {
    let navi=useNavigate();
const [dataob,setDataOb]=useState({})
let params=useParams()
useEffect(()=>{
    let fetchdata= async()=>{
        let response=await fetch(`http://localhost:4001/books/${params.id}`)
        let data=await response.json()
       setDataOb({...data})
      }
  fetchdata()
},[])
  return (
    <div className='readbook'>
        <h1>Description...</h1>
       <div className="text">{dataob.description}</div> 
       <div>
        <a className='belowbtn' style={{textDecoration:"none",color:"white",boxSizing:"border-box",padding:"10px",top:"2px",position:"relative"}} href={dataob.link}>Check on Wikipedia</a>
        <button className='belowbtn' onClick={()=>navi('/admin/booklist')}>GO back to Booklists</button>
       </div>
        </div>
  )
}
