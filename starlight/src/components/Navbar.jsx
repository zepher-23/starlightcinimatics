import React from "react";
import {Link} from 'react-router-dom'
import '../App.css'

const Navbar = (props) => {
    const screen = props.screen
    
    
  return (
    <><div className='navbar' style={{position:'fixed',backgroundColor:'rgba(36, 36, 36, 0.9)',top:'0'}}>
    <div style={{width:'100vw',height:screen==='mobile'?'70px':'100px',color:'white',display:'flex',flexDirection:'row',alignItems:'center',backdropFilter:'blur(5px)'}}>
        {
        screen==='mobile'?<h2 style={{flexGrow:'1',textAlign:'center',fontStyle:'italic',fontWeight:800,color:'#feffa8'}}> STARLIGHT CINEMATICS</h2>
        :<h2 style={{flexGrow:'1',paddingLeft:'100px',fontStyle:'italic',fontWeight:800,color:'#feffa8'}}> STARLIGHT CINEMATICS</h2>
        }
        {screen==='mobile'?"":<div style={{width:'25%',display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'space-around',paddingRight:'100px'}}>
           <Link to='/blog'> <h4>Blog</h4></Link>
           <Link to='/gallery'> <h4>Gallery</h4></Link>
           <Link to='/tutorials'> <h4>Tutorials</h4></Link>
           <Link to='/contact'> <h4>Contact</h4></Link>
        </div>}
        
    </div></div>
    </>
  );
};

export default Navbar;
