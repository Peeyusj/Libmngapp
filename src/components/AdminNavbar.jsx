import React from 'react'
import '../styles/AdminNavbar.css'
import { Link,to } from 'react-router-dom'

export const AdminNavbar = () => {
  return (
    <div className='AdminNavbar'>
        <div className="uptext">
           Admin <br />
           admin@gmail.com
        </div>
        <div className="lis">
         <Link>BookList</Link>
         <Link>Adduser</Link>
         <Link>UserList</Link>
         <Link>Addbooks</Link>
        </div>
        <div className="logout">
            <Link>Logout</Link>
        </div>
    </div>
  )
}
