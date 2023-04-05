import React from 'react'
import '../styles/adminlog.css'
import{useNavigate} from 'react-router-dom'
import larrow from "../assets/arrow.png"
import userimg from "../assets/userimg.png"
export const UserLogin = () => {
  let nevigator=useNavigate()
  return (
     <div className='AdminLogin'>
      <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div>
      <img style={{position:"relative",right:"5px"}} src={userimg} alt="" />

    <form className="log">
    <div >
      <input type="text" placeholder='username...' /> <br />
      <input type="password" placeholder='pin...' />
    </div>
    <div className="btn">
      <button>Login</button>
    </div>
    </form>
    
  </div>
  )
}
