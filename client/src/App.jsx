import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.sass'
import Home from './views/Home/Home'
import AddStaff from './views/AddStaff/AddStaff'
import Staff from './views/Staff/Staff'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addstaff' element={<AddStaff />} />
      <Route path='/staff/:staffid' element={<Staff />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
export const API_URL = import.meta.env.VITE_API_URL
