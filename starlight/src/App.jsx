import {BrowserRouter,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Blog from './Blog'
import Gallery from './Gallery'
import React,{useState,useEffect} from 'react'

function App() {
  const [screen,setScreen] =  useState(null)
  useEffect(()=>{
      if(window.innerWidth < 768)
          setScreen("mobile")
      else if(window.innerWidth > 1300)
          setScreen("laptop")
      else
      setScreen("tablet")
      

  })
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home screen={screen} />} />
    <Route path='/blog' element = {<Blog screen={screen} />}/>
    <Route path='/gallery' element = {<Gallery screen={screen} />}/>


    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
