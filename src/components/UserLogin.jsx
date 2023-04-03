import React from 'react'
import '../styles/adminlog.css'

export const UserLogin = () => {
  return (
     <div className='AdminLogin'>
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
