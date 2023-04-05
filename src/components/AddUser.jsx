import React from 'react'

export const AddUser = () => {
  return (
    <div className='AdminLogin'>
    {/* <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div> */}
  <div className="log">
    <h1 style={{color:"white"}}>Create User...</h1>
  <div >
    <input type="text" placeholder='add username...' /> <br />
    <input type="password" placeholder='add pin...' />
  </div>
  <div className="btn">
    <button style={{color:"white"}}>Create</button>
  </div>
  </div>
  
</div>
  )
}