import React,{useState} from 'react'
import { Route,Routes,useLocation } from 'react-router-dom'
import { AdminHome } from './AdminHome'
import { BookList } from './BookList'
import { AdminNavbar } from './AdminNavbar'
import { AddBook } from './AddBooks'
import { AddUser } from './AddUser'
import { UserList } from './UserList'
import { Readbook } from './Readbook'

export const Adminportal = () => {
  let loc=useLocation()
  const[dispval,setDispval]=useState(false)

 let dispfun=(val)=>{
setDispval(val)
  }
  return (
    <div className="adminhome">
        <AdminNavbar loc={loc.pathname} dispval={dispval}/>
        {/* {loc=='/admin/'&&<img src={adminport} alt="" />} */}
        <Routes>          
            <Route path='/' element={<AdminHome dispfun={dispfun}/>}/>
            <Route path='/booklist' element={<BookList/>}/>
            <Route path='/addbooks' element={<AddBook/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/userlist' element={<UserList/>}/>
            <Route path="/booklist/:id" element={<Readbook/>}/>
        </Routes>
    </div>
 
  )
}
