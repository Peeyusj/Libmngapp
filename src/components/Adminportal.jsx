import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { AdminHome } from './AdminHome'
import { BookList } from './BookList'
import { AdminNavbar } from './AdminNavbar'
import { AddBook } from './AddBooks'
import { AddUser } from './AddUser'
import { UserList } from './UserList'
export const Adminportal = () => {
  return (
    <div className="adminhome">
        <AdminNavbar/>
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
