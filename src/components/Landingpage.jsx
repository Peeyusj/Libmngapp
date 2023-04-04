import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import '../styles/landinPage.css'
import landingimg from '../assets/landingpageimg.png'

export const Landingpage = () => {
  let loc=useLocation()
  console.log(loc);
  return (
    <div className='landingpage'>
      <div style={{position:"absolute",top:"60px",width:"280px",}}><img style={{width:"260px"}} src={landingimg} alt="" /></div>
      <div className='adminLog same' >
      <Link className='lin lin1' to="/admin-login"><div className='litext'>Admin Login</div> </Link>
      </div>
      <div className='userLog same '>
      <Link className='lin lin2' to="/user-login"><div className='litext'>User Login</div></Link>
      </div>
    </div>
  )
}
