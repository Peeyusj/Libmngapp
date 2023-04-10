import React,{useState} from 'react'

import { Route,Routes,useLocation } from 'react-router-dom'
import { UserHome } from './UserHome'
import { BookList } from './BookList'
import { Readbook } from './Readbook'
import  {UserNavbar}  from './UserNavbar'
export const Userportal = () => {
    let loc=useLocation()
    const[dispval,setDispval]=useState(false)
  
   let dispfun=(val)=>{
  setDispval(val)
    }
  return (
    <div className="adminhome">  <UserNavbar loc={loc.pathname} dispval={dispval}/>
    
    <Routes>          
        <Route path='/' element={<UserHome dispfun={dispfun}/>}/>
        <Route path='/booklist' element={<BookList/>}/>
        <Route path="/booklist/:id" element={<Readbook/>}/>
    </Routes></div>
  )
}
