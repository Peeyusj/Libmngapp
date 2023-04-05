import React from 'react'
import { Route,Routes,useLocation } from 'react-router-dom'
import { AdminHome } from './AdminHome'
import { BookList } from './BookList'
import { AdminNavbar } from './AdminNavbar'
import { AddBook } from './AddBooks'
import { AddUser } from './AddUser'
import { UserList } from './UserList'

export const Adminportal = () => {
  let loc=useLocation()
  return (
    <div className="adminhome">
        <AdminNavbar/>
        {/* {loc=='/admin/'&&<img src={adminport} alt="" />} */}
        <Routes>          
            <Route path='/' element={<AdminHome/>}/>
            <Route path='/booklist' element={<BookList/>}/>
            <Route path='/addbooks' element={<AddBook/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/userlist' element={<UserList/>}/>


        </Routes>
    </div>
 
  )
}
