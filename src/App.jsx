import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from "./Components/Header.jsx";
import Banner from "./Components/Banner.jsx";
import About from './Components/About.jsx'
import Project from './Components/Projects.jsx'
import Skills from './Components/Skills.jsx'
import Contact from './Components/ContactMe.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Header/>
        <Banner/>
        <About/>
        <Project/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App

