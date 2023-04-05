import React from 'react'

export const AddBook = () => {
  return (
    <div className='AdminLogin'>
    {/* <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div> */}
  <div className="log" style={{width: "40%",height: "530px"}}>
    <h1 style={{color:"white"}}>Add Book</h1>
  <div >
    <input type="text" placeholder='add author name...' /> <br />
    <input type="text" placeholder='add origin country' /> <br />
    <input type="text" placeholder='add imagelink...' /><br />
    <input type="text" placeholder='add language...' /><br />
    <input type="text" placeholder='add wikipedia link...' /><br />
    <input type="text" placeholder='add pages...' /><br />
    <input type="text" placeholder='add title...' /><br />
    <input type="text" placeholder='add year...' /><br />
    <input type="text" placeholder='add description...' /><br />

  </div>
  <div className="btn">
    <button style={{color:"white"}}>Add</button>
  </div>
  </div>
  
</div>
  )
}