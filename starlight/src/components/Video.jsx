import React,{useRef,useState} from "react";
import videoOne from '../assets/Untitled4.mp4'
import '../App.css'

const Video = () => {
    const videoRef = useRef(null)

    const mouseEntered = () =>{
        videoRef.current.play()
    }
    const mouseLeft =() =>{
        videoRef.current.pause();
    }
  return (
    <>
   
        <video  className="video" ref={videoRef} onMouseEnter={mouseEntered}  onMouseLeave={mouseLeft}  style={{width:'30%',borderRadius:'10px',overflow: 'hidden',marginBottom:'60px'}}>
            <source src={videoOne}/>
        </video>
  
    </>
  )

};

export default Video;
