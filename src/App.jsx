import './App.css'

import Navbar from './components/Navbar'
import Home from './components/pages/Home.jsx'
import Contact from './components/pages/Contact.jsx'
import Services from './components/pages/Services.jsx'
import Footer from './components/Footer.jsx'

import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App