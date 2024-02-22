// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { Button } from '@/components/ui/button'
// import Navbar from './components/navbar'

import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/processing-image" element={<Processing_image />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
