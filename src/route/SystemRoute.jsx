import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Gardening from '../pages/Gardening'
import Educational from '../pages/Educational'
import About from '../pages/About'

const SystemRoute = () => {
  return (
  <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Gardening' element={<Gardening/>}/>
            <Route path='/Educational' element={<Educational/>}/>
            <Route path='/About Us' element={<About/>}/>
        </Routes>
  </BrowserRouter>
   )
}

export default SystemRoute
