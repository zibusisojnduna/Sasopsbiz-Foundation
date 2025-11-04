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
import Learnership from './pages/learnership'
import Furnlab from './pages/furnlab'
import Swits from './pages/swits'
import Uceni from './pages/uceni'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />

          {/* ---- Programes main + subpages ---- */}
          <Route path="programes" element={<Programes />}>
            <Route path="learnership" element={<Learnership />} />
            <Route path="furnlab" element={<Furnlab />} />
            <Route path="swits" element={<Swits />} />
            <Route path="uceni" element={<Uceni />} />
          </Route>

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
