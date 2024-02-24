import React from "react";
import videoOne from '../assets/Untitled4.mp4'
import '../App.css'

const Video = () => {
  return (
    <>
   
        <video  className="video"   style={{width:'30%',borderRadius:'10px',overflow: 'hidden',marginBottom:'60px'}}>
            <source src={videoOne}/>
        </video>
  
    </>
  )

};

export default Video;
