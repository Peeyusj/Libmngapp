import React,{useRef,useEffect} from 'react'
import '../styles/AdminNavbar.css'
import { Link,to } from 'react-router-dom'
import user from "../assets/user.png"
import group from "../assets/group.png"


export const AdminNavbar = (props) => {
  const navu =useRef()
//   console.log(props.dispval);
//  useEffect(()=>{
//   if(props.loc=="/admin/"||props.loc=="/user/"){
//     navu.current.style.display="none";
//   }
//   if(props.dispval&&(props.loc==="/admin/"||props.loc=="/user/")){
//     navu.current.style.display="flex";
//     navu.current.style.top = '60px';
//     // navu.current.style.transitionDuration="1s"
//   }
//   else{
//     navu.current.style.top = '0px';
//   }
//   let handler = (e) => {
//     if (!navu.current.contains(e.target)&&(props.loc==="/admin/"||props.loc=="/user/")) {
//       navu.current.style.display = "none";
//     }
//     else{
//     navu.current.style.display="flex";
//     }
//   };
//   document.addEventListener("mousedown", handler);
//   return () => {
//     document.removeEventListener("mousedown", handler);
//   };
//  },[props.loc,props.dispval])

  
  return (
    <div className='AdminNavbar' ref={navu}>
        <div className="uptext">
         <Link to="/admin/">Admin</Link>  
           <br />
           <img width="48" height="50" style={{marginLeft:"90px"}} src={props.loc=="/user/"?group:user} alt="" />
           admin@gmail.com
        </div>
        <div className="lis">
         <Link to="/admin/adduser">Adduser</Link>  
         <Link to="/admin/addbooks">Addbooks</Link>
         <Link to="/admin/booklist">BookList</Link>
         <Link to="/admin/userlist">UserList</Link>
        </div>
        <div className="logout">
            <Link to="/Libmngapp">Logout</Link>
        </div>
    </div>
  )
 
}
