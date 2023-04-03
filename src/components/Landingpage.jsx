import React from 'react'
import { Link } from 'react-router-dom'

export const Landingpage = () => {
  return (
    <div>
      <div className='adminLog' style={{height:"20px",width:"20px"}}>
<Link to="/admin-login">Admin Login</Link>
      </div>
      <div>
        <Link to="/user-login">User Login</Link>
      </div>
    </div>
  )
}
