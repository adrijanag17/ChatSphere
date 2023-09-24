import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/channels" element={<><Home/></>} />
            <Route path="/channels/:id" element={<><Home/></>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
