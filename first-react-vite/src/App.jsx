import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/LandingPage';
import Event from './components/Event/Event';
import Daftar from './components/Event/Daftar';
import Faq from './components/Event/FAQ';
import About from './components/Event/About';
import Login from './components/Admin/Login';
import Create from './components/Admin/Create';
import Pendaftar from './components/Admin/Pendaftar'

function Routing() {

  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/event" exact element={<Event />} />
          <Route path="/daftar" exact element={<Daftar />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/admin/login" exact element={<Login/>}/>
          <Route path="/admin/create" exact element={<Create/>}/>
          <Route path="/admin/pendaftar" exact element={<Pendaftar/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default Routing;