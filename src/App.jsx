
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Navbar } from './components/Navbar'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/front_portafolio" replace />} />
        <Route path="/front_portafolio" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>

     
    </>
  )
}

export default App
