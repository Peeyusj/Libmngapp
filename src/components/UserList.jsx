import React,{useState,useEffect} from 'react'
import '../styles/userlist.css'
export const UserList = () => {
  const [user,setUserList]=useState([])
  useEffect(()=>{
    let fetchdata= async()=>{
      let response=await fetch("https://libdata.onrender.com/users")
      let data=await response.json()
      setUserList(data)
      console.log(user);
    }
fetchdata()
  })
  return (
    <div  className='usercontainer'>
      {user.map((u)=><div className="userss">
          <div className="name">{u.name}</div>
          <div className="email">{u.email}</div>
          <div className="phn">{u.phn}</div>
        </div>)
      }
    </div>
    
  )
}