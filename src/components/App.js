import React from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import ImageList from './ImageList'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './AboutUs'
import Contact from './ContactUs'

function App() {



  return(

    <BrowserRouter>
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
    </BrowserRouter>



  )

}




export default App;
