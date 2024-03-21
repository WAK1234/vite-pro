import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx'
function App() {  

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Signin />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
