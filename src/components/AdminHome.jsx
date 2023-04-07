import React,{useState} from 'react'
import '../styles/adminhome.css'
import topimg from '../assets/Books.jpg'
//import belowimg from '../assets/Pattern.png'
import bimg from '../assets/resume.jpg'
import ra from '../assets/right-arrow.png'
import menu from '../assets/menu.png'



export const AdminHome = (props) => {
  const[disp,setDisp]=useState(false)
props.dispfun(disp)
let clickhandler=()=>{
  setDisp(!disp)
}
  return (
    <div className='adminhome1'>
      <div className="nav1">
       <img className='menuimg' onClick={clickhandler} src={menu} alt="" />
           Admin Dashboard...
      </div>
       <div className="imgtop" style={{backgroundImage:`url(${topimg})`}}>
        <div className="txt1">
          <div className='txt1a'>
           <h1>Create your E-Library and manage users</h1> 
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eligendi esse adipisci facere sunt. Laboriosam deleniti atque quibusdam corrupti ratione aliquid mollitia?</p>
           <div className='btnanim'>
            <div className='readmo'><span></span> Read more</div>
               <div className='aran' ><img src={ra} alt="" /></div>
           </div>
          </div>
        {/* <img style={{width:"100%"}}className='tpi' src={topimg} alt="" /> */}
        </div>
       </div>
       <div className='expout'>
       <div className="explore"  >
           Explore...
      </div>
       </div>
       <div className="resumewriting">
            <div className="bimg">
              <img src={bimg} alt="" />
            </div>
       </div>
    </div>
  )
}
