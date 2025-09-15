import React from 'react'
import Nav from './components/Nav'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='contact' element={<Contact/>}/>
     </Routes>
    </div>
  )
}
export default App