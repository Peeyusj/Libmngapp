import React from 'react'
import '../styles/adminlog.css'
import{useNavigate} from 'react-router-dom'
import larrow from "../assets/arrow.png"


export const AdminLogin = () => {
  let nevigator=useNavigate()

  return (
    <div className='AdminLogin'>
      <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div>

      <div className="log">
      <div >
        <input type="text" placeholder='username...' /> <br />
        <input type="password" placeholder='pin...' />
      </div>
      <div className="btn">
        <button>Login</button>
      </div>
      </div>
      
    </div>
  )
}
