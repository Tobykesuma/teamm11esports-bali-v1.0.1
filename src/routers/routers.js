import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import Home from '../pages/Home'

const routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={} />
    </Routes>
  )
}

export default routers