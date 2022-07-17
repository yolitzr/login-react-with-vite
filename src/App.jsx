import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {

  return (
    <Router>
      <div className='max-w-screen-xl mx-auto'>
        <Routes>
          <Route path="/" element={<Login title="Welcome"/>} />
          <Route path="/register" element={<Register title="Register" />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
