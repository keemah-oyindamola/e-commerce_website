import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpg from './Landingpg'
import Signup from './Signup'
import Login from './Login'
import Dashbd from './Dashbd'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Landingpg />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard/:userid' element={<Dashbd/>}/>
      </Routes>
    </>

  )
}

export default App