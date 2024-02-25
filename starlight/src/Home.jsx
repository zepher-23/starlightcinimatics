import React ,{useState} from "react";

import Footer from './components/Footer'
import Video from './components/Video'
import Navbar from "./components/Navbar"


const Home = () => {
const [videos,setVideos] = useState(['Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4'])
  return (
    <>
    
    <Navbar />

    <div style={{paddingRight:'100px',paddingLeft:'100px',marginTop:'120px'}}>
    <h1>Video Gallery</h1>
 <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
    {videos.map((item,index)=>{
       return <Video key={index}/>
    })}
    
    
     </div>
     
     </div>
    
    </>
  )
};

export default Home;
