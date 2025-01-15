import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import { Footerr } from './components/Footer/Footerr'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footerr />
    </BrowserRouter>
    </>
  )
}

export default App
App