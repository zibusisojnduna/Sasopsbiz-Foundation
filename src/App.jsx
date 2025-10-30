import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contacts from './pages/contacts'
import Events from './pages/events'
import Gallery from './pages/gallery'
import Home from './pages/home'
import Layout from './pages/layout'
import Opportunities from './pages/opportunities'
import Team from './pages/ourTeam'
import Programes from './pages/programes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/programes" element={<Programes />} />
      <Route path="/events" element={<Events />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App
