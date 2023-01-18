import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/contact" element={<Projects />} /> */}
          </Route> 
        </Routes>
    </>
  )
}

export default App
