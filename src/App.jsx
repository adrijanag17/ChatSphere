import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Header/><Hero/></>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
