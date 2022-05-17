import React from 'react'
import Main from './components/Main/Main'
import About from './components/About/About'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Test from './components/Test/Test'
export default function App() {
  let test = [1,2]
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/profile/:username' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/test' element={<Test/>}/>
    </Routes>
    </BrowserRouter>
  )
}