import React from 'react'
import '../styles/AdminNavbar.css'
import { Link,to } from 'react-router-dom'
import user from "../assets/user.png"

export const AdminNavbar = () => {
  return (
    <div className='AdminNavbar'>
        <div className="uptext">
         <Link to="/admin/">Admin</Link>  
           <br />
           <img width="48" height="50" style={{marginLeft:"90px"}} src={user} alt="" />
           admin@gmail.com
        </div>
        <div className="lis">
         <Link to="/admin/adduser">Adduser</Link>  
         <Link to="/admin/addbooks">Addbooks</Link>
         <Link to="/admin/booklist">BookList</Link>
         <Link to="/admin/userlist">UserList</Link>
        </div>
        <div className="logout">
            <Link to="/">Logout</Link>
        </div>
    </div>
  )
}
