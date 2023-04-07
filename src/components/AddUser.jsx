import React,{useRef} from 'react'

export const AddUser = () => {
  let name=useRef("")
  let email=useRef("")
  let phn=useRef("")


  let submit=(e)=>{
    e.preventDefault()
    let data={
        name:name.current.value,
        email:email.current.value,
        phn:phn.current.value,
    }
    fetch("http://localhost:4001/users",{method:'Post',headers:{"Content-Type":'application/json'},body:JSON.stringify(data)})
    alert("added")
   
}
  return (
    <div className='AdminLogin'>
    {/* <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div> */}
  <div className="log">
    <h1 style={{color:"white"}}>Create User...</h1>
  <form onSubmit={submit}>
    <input type="text" ref={name}  placeholder='add name...' /> <br />
    <input type="text" ref={email} placeholder='add email...' /> <br />
    <input type="text" ref={phn} placeholder='add phone-number...' />
    <div className="btn">
    <button style={{color:"white"}}>Create</button>
  </div>
  </form>
  
  </div>
  
</div>
  )
}