import React,{useRef,useEffect} from 'react'
import '../styles/AdminNavbar.css'
import { Link,to } from 'react-router-dom'
import user from "../assets/user.png"
import group from "../assets/group.png"

export const UserNavbar = (props) => {
    const navu =useRef()
      // console.log(props.dispval);
    //  useEffect(()=>{
    //   if(props.loc=="/admin/"||props.loc=="/user/"){
    //     navu.current.style.display="none";
    //   }
    //   if(props.dispval&&(props.loc==="/admin/"||props.loc=="/user/")){
    //     navu.current.style.display="flex";
    //     navu.current.style.top = '60px';
        
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
             <Link to="/user/">username</Link>  
               <br />
               <img width="48" height="50" style={{marginLeft:"90px"}} src={props.loc=="/user/"?group:user} alt="" />
               useremail@id
            </div>
            <div className="lis">
    
             <Link to='/user/booklist'>BookList</Link>
            
            </div>
            <div className="logout">
                <Link to="/">Logout</Link>
            </div>
        </div>
      )
     
}

