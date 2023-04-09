import React, { useRef, useState,useEffect } from "react";

import classes from "../styles/videolist.module.css";
import rightarrow from "../assets/swiperight.png";
import lefttarrow from "../assets/swipeleft.png";


const Videolist = (props) => {
  const [bookimg,setBookimg]=useState([])
  useEffect(()=>{
    let fetchdata= async()=>{
      let response=await fetch("http://localhost:4001/books")
      let data=await response.json()
      setBookimg(data)
    }
fetchdata()
  })
  const [scrollcount, setscrollCount] = useState(0);
  let element = useRef();
  const leftclickhandler = () => {
    let firstelement =
    element.current.children[0].getBoundingClientRect().x;
  console.log(firstelement);
    
    //setscrollCount(scrollcount - 3);
    if (firstelement<-100) {
      let distance = element.current.getBoundingClientRect().x ;
      element.current.style.transform = `translateX(${240 * 3 + distance}px)`;
    }
  };
  const rightclickhandler = () => {
    let lastelement =
      element.current.children[
        element.current.children.length - 1
      ].getBoundingClientRect().x;
    // console.log(lastelement);
    setscrollCount(scrollcount + 6);
    if (lastelement > 1032) {
      console.log(scrollcount);
      let distance = element.current.getBoundingClientRect().x ;
      element.current.style.transform = `translateX(${-1093 + distance}px)`;
      console.log(distance)
    }
  };
  return (
    <div >
      <img
        className={`${classes.leftarrow} ${
          scrollcount ? classes.leftarrowhvrok : classes.leftarrowhvrnok
        } `}
        onClick={() => leftclickhandler(props.categ)}
        src={lefttarrow}
        alt=""
      />
      <img
        className={classes.rightarrow}
        onClick={() => rightclickhandler(props.categ)}
        src={rightarrow}
        alt=""
      />
      <div className={classes.listoutercontainer} ref={element}>
        {props.categ === "toprated" &&
          bookimg.map(
            (items) =>
              
         <div className={classes.liderimg}><img  src={items.imageLink} alt="add book to browse" /></div>
              
          )}
      </div>
    </div>
  );
};

export default Videolist;
