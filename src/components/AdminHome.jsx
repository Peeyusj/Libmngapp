import React, { useState } from 'react'
import '../styles/adminhome.css'
import topimg from '../assets/Books.jpg'
import belowimg from '../assets/Pattern.png'
import bimg from '../assets/resume.jpg'
import ra from '../assets/right-arrow.png'
import menu from '../assets/menu.png'
import vln from '../assets/Volnter.jpg'
import Vidcrsl from './Vidcrsl'

export const AdminHome = (props) => {
  const [disp, setDisp] = useState(false)
  props.dispfun(disp)
  let clickhandler = () => {
    setDisp(!disp)
  }
  return (
    <div className='adminhome1'>
      <div className="nav1">
        {/* <img className='menuimg' onClick={clickhandler} src={menu} alt="" /> */}
        Admin Dashboard...
      </div>
      <div className="imgtop" style={{ backgroundImage: `url(${topimg})` }}>
        <div className="txt1">
          <div className='txt1a'>
            <h1>Create your E-Library and manage users</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eligendi esse adipisci facere sunt. Laboriosam deleniti atque quibusdam corrupti ratione aliquid mollitia</p>
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
          <div className='txt1a-i'>
            <h1>Add books to your E-Library</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eligendi esse adipisci facere sunt. Laboriosam deleniti atque quibusdam corrupti ratione aliquid mollitia</p>
            <div className='btnanim' id="btnanimid">
              <div className='readmo'><span></span>Try it Out</div>
              <div className='aran' ><img src={ra} alt="" /></div>
            </div>
          </div>

        </div>
      </div>
      <div className='scrlimg' style={{ backgroundImage: `url(${belowimg})` }} >

      </div>
      <div className="greenback">
       <div style={{width:'80%',marginInline:"auto",color:"white",paddingTop:"55px",boxSizing:"border-box"}}>
        <div style={{fontSize:'35px'}}>April Events</div>
        <div style={{fontSize:'22px'}}>Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page Library calendars are fridge-ready.</div>
        <div className='btnanim' id='btnanimD'>
            <div className='readmo'><span></span><div className='lmo'>A larrrger text Now</div> </div>
            <div className='aran' ><img src={ra} alt="" /></div>
          </div>
       </div>
      </div>
      <div className="box">
        <div className="boxes">
          <h1>Heading 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam accusamus fugiat voluptatem ducimus, reiciendis consequuntur blanditiis laborum tempore rem eos nesciunt beatae assumenda, vel id.</p>
          <a href="">Register here</a>
        </div>
        <div className="boxes">
          <h1>Heading 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam accusamus fugiat voluptatem ducimus, reiciendis consequuntur blanditiis laborum tempore rem eos nesciunt beatae assumenda, vel id.</p>
          <a href="">Register here</a>
        </div>
        <div className="boxes">
          <h1>Heading 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam accusamus fugiat voluptatem ducimus, reiciendis consequuntur blanditiis laborum tempore rem eos nesciunt beatae assumenda, vel id.</p>
          <a href="">Register here</a>
        </div>
        <div className="boxes">
          <h1>Heading 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam accusamus fugiat voluptatem ducimus, reiciendis consequuntur blanditiis laborum tempore rem eos nesciunt beatae assumenda, vel id.</p>
          <a href="">Register here</a>
        </div>

      </div>
      <div className="resumewriting" >
        <div className="bimg">
          <img src={vln} alt="" />
          <div className='txt1a-i' >
            <h1>Become a Volunteer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eligendi esse adipisci facere sunt. Laboriosam deleniti atque quibusdam corrupti ratione aliquid mollitia</p>
            <div className='btnanim' id="btnanimidA">
              <div className='readmo'><span></span><div className='lmo'>Learn More</div></div>
              <div className='aran'  ><img src={ra} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="slider">
        <h1>2023 Business Books To Read</h1>
        <Vidcrsl />
        <div className='btnanim' id='btnanimB'>
          <div className='readmo'><span></span><div className='lmo'>Take a look</div> </div>
          <div className='aran' ><img src={ra} alt="" /></div>
        </div>
      </div> */}
      <div className="greenbanner">
        <div>Michael Embry</div>
        <div>I don’t have to look far to find treasures. I discover them every time I visit a library.</div>
      </div>
      <div className="footdiv">
        <div className="b1" >
          <div className='b2-a'>
          <div className='hb-1'>Sign Up for Our Newsletter</div>
          <div  className='pb-1'>Stay up to date with library events, new books, or what's going on in our community.</div>
          <div className='btnanim' id='btnanimC'>
            <div className='readmo'><span></span><div className='lmo'>Sign Up</div> </div>
            <div className='aran' ><img src={ra} alt="" /></div>
          </div>
          </div>
         </div>
        <div className="b2">
          <div className='b2-a'>
          <div  className='hb-1'>Support The Library</div>
          <div className='pb-1'>Donate today and help ensure that the Library continues to evolve to meet the needs of our community.</div>
          <div className='btnanim' id='btnanimC'>
            <div className='readmo'><span></span><div className='lmo'>Donate Now</div> </div>
            <div className='aran' ><img src={ra} alt="" /></div>
          </div>
          </div>
          </div>
      </div>
      <div className='last'></div>
    </div>
  )
}
