import React,{useState} from 'react'

import { Route,Routes,useLocation } from 'react-router-dom'
import { UserHome } from './UserHome'
import { AdminNavbar } from './AdminNavbar'
export const Userportal = () => {
    let loc=useLocation()
    const[dispval,setDispval]=useState(false)
  
   let dispfun=(val)=>{
  setDispval(val)
    }
  return (
    <div className="adminhome">  <AdminNavbar loc={loc.pathname} dispval={dispval}/>
    
    <Routes>          
        <Route path='/' element={<UserHome dispfun={dispfun}/>}/>
        
    </Routes></div>
  )
}
