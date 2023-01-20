import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Contact from './components/Pages/Contact/Contact'
import Project from './components/Pages/Project/Project'
// import Loader from 'react-loaders'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route> 
        </Routes>
    </>
  )
}

export default App;
