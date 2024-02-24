import {BrowserRouter,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Blog from './Blog'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/blog' element = {<Blog/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
