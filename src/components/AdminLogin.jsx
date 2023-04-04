import React,{useState} from 'react'
import '../styles/adminlog.css'
import{Navigate, useNavigate,useLocation} from 'react-router-dom'
import larrow from "../assets/arrow.png"


export const AdminLogin = () => {
  const[user,setUser]=useState("")
  const[pin,setPin]=useState("")
  let nevigator=useNavigate()
  let loc=useLocation()
  console.log(loc);
  let submitHandler=(e)=>{
e.preventDefault()
let data={
  name:user,
  pin:pin,
}
if(data.name=="admin@gmail.com"&&data.pin==12345){
    nevigator('/adminportal')
}
else{
alert("wrong details")
}
  }

  let nameHandler=(e)=>{
    setUser(e.target.value)
    
  }
  let pinHandler=(e)=>{
    setPin(e.target.value)
  }
  
  return (
    <div className='AdminLogin'>
      <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div>

      <form onSubmit={submitHandler} className="log">
      <div >
        <input type="text" value={user} onChange={nameHandler} placeholder='username...' /> <br />
        <input type="text" value={pin} onChange={pinHandler} placeholder='pin...' />
      </div>
      <div className="btn">
        <button>Login</button>
      </div>
      </form>
      
    </div>
  )
}
