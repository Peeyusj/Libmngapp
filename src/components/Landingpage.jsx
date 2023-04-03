import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landinPage.css'

export const Landingpage = () => {
  return (
    <div className='landingpage'>
      <div className='adminLog same' >
      <Link className='lin lin1' to="/admin-login"><div className='litext'>Admin Login</div> </Link>
      </div>
      <div className='userLog same '>
      <Link className='lin lin2' to="/user-login"><div className='litext'>User Login</div></Link>
      </div>
    </div>
  )
}
