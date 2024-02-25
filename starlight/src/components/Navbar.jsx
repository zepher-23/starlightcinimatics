import React from "react";
import {Link} from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <><div className='navbar' style={{position:'fixed',backgroundColor:'#242424',top:'0'}}>
    <div style={{width:'100vw',height:'100px',color:'white',display:'flex',flexDirection:'row',alignItems:'center'}}>
        <h2 style={{flexGrow:'1',paddingLeft:'100px'}}> Starlight Cinematics</h2>
        <div style={{width:'25%',display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'space-around',paddingRight:'100px'}}>
           <Link to='/blog'> <h4>Blog</h4></Link>
           <Link to='/editing'> <h4>Editing</h4></Link>
           <Link to='/tips'> <h4>Tips</h4></Link>
           <Link to='/contact'> <h4>Contact</h4></Link>
        </div>
    </div></div>
    </>
  );
};

export default Navbar;
