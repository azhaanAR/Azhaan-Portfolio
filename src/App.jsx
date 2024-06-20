import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/Hero_Section/Herosection'
import AboutSection from './Components/About_Section/AboutSection'
import Experience from './Components/Experience_section/Experience'
import Skill from './Components/Skill_Section/Skill'
import Education from './Components/Education_Section/Education'
import Contact from './Components/Contact_section/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
   
    <>
    <Navbar/>
    <Herosection/>
    <AboutSection/>
    <Experience/>
    <Skill/>
    <Education/>
    <Contact/>
    <Footer/>
 
    </>
  )
}

export default App

