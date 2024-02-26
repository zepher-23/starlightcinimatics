import React ,{useState,useEffect} from "react";

import Footer from './components/Footer'
import Video from './components/Video'
import Navbar from "./components/Navbar"


const Home = () => {
    const [screen,setScreen] =  useState(null)
    useEffect(()=>{
        if(window.innerWidth < 768)
            setScreen("mobile")
        else if(window.innerWidth > 1300)
            setScreen("laptop")
        else
        setScreen("tablet")
        

    })
    

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

export default Home;
