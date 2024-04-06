import './App.css'
import Home from './pages/Home'
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Skill from "./components/Skill"
import {Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
