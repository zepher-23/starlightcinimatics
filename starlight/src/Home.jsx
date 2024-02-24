import React ,{useState} from "react";

import Footer from './components/Footer'
import Video from './components/Video'
import Navbar from "./components/Navbar"


const Home = () => {
const [videos,setVideos] = useState(['Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4','Untitled4.mp4'])
  return (
    <>
    
    <Navbar />
 <div style={{padding:'100px',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
    {videos.map((item)=>{
       return <Video />
    })}
    
    
     </div>
    
    </>
  )
};

export default Home;
