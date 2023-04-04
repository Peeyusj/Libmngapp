import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { AdminHome } from './AdminHome'
import { BookList } from './BookList'
import { AdminNavbar } from './AdminNavbar'
export const Adminportal = () => {
  return (
    <div className="adminhome">
        <AdminNavbar/>
        <Routes>
            <Route path='/' element={<AdminHome/>}/>
            <Route path='/booklist' element={<BookList/>}/>

        </Routes>
    </div>
 
  )
}
