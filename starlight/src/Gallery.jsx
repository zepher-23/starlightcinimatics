import React,{useState,useEffect} from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Video from "./components/Video";

const Gallery = (props) => {
    const screen = props.screen
    

const [videos,setVideos] = useState(['Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4'])
  return (
    <>
    
    <Navbar screen={screen} />

    <div style={{paddingRight:screen==='laptop'?'100px':'10px',paddingLeft:screen==='laptop'?'100px':'10px',marginTop:'140px'}}>
        {screen==="mobile"?<h1 style={{textAlign:'center'}}>Cinematic</h1>:<h2 style={{textAlign:'center'}}>Cinematic</h2>}
    
 <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
    {videos.map((item,index)=>{
       return <Video key={index} screen = {screen}/>
    })}
    
    
     </div>
     
     </div>
    
    </>
  )

};

export default Gallery;
