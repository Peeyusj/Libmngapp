import React,{useRef,useEffect} from 'react'

export const AddBook = () => {
    let title=useRef("")
    let author=useRef("")
    let imageLink=useRef("")
    let country=useRef("")
    let link=useRef("")
    let pages=useRef("")
    let year=useRef("")
    let description=useRef("")
    let language =useRef("")

    let submit=(e)=>{
      e.preventDefault()
      let data={
          title:title.current.value,
          author:author.current.value,
          imageLink:imageLink.current.value,
          language:language.current.value,
          country:country.current.value,
          link:link.current.value,
          pages:pages.current.value,
          year:year.current.value,
          description:description.current.value
      }
      fetch("http://localhost:4001/books",{method:'Post',headers:{"Content-Type":'application/json'},body:JSON.stringify(data)})
      alert("added")
  }
  return (
    <div className='AdminLogin'>
  
  <div className="log" style={{width: "40%",height: "530px"}}>
    <h1 style={{color:"white"}}>Add Book</h1>
  <div >
    <input type="text" ref={title} placeholder='add author name...' /> <br />
    <input type="text" ref={country} placeholder='add origin country' /> <br />
    <input type="text"  ref={imageLink} placeholder='add imagelink...' /><br />
    <input type="text"  ref={language} placeholder='add language...' /><br />
    <input type="text"  ref={link} placeholder='add wikipedia link...' /><br />
    <input type="text"  ref={pages} placeholder='add pages...' /><br />
    <input type="text"  ref={title} placeholder='add title...' /><br />
    <input type="text"  ref={year} placeholder='add year...' /><br />
    <input type="text"  ref={description} placeholder='add description...' /><br />
  </div>
  <div className="btn">
    <button style={{color:"white"}}>Add</button>
  </div>
  </div>
  
</div>
  )
}