import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import Team from './pages/ourTeam'
import Events from './pages/events'
import Opportunities from './pages/opportunities'
import Contacts from './pages/contacts'
import Programes from './pages/programes'
import Gallery from './pages/gallery'
import Furnlab from './pages/sasopsbizFurnlab'
import Swits from './pages/swits'
import Uceni from './pages/uceni'
import Placement from './pages/workPlacementLearnerships'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter> 
  <Routes> 
    <Route path="/" element={<Layout />}> 
    <Route index element={<Home />} /> 
    <Route path="team" element={<Team />} /> 
    <Route path="programes" element={<Programes />} /> 
    <Route path="events" element={<Events />} /> 
    <Route path="opportunities" element={<Opportunities />} /> 
    <Route path="gallery" element={<Gallery />} /> 
    <Route path="contacts" element={<Contacts />} /> 
    </Route> 
  </Routes> 
  </BrowserRouter>


    </>
  )
}

export default App
