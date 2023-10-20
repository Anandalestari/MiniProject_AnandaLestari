import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Event/LandingPage';
import Event from './Event/Event';
import Daftar from './Event/Daftar';
import Faq from './Event/FAQ';
import About from './Event/About';
import Login from './Admin/Login';
import Create from './Admin/Create';
import Pendaftar from './Admin/Pendaftar'

function Routing() {

  return(
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/event" exact element={<Event />} />
          <Route path="/daftar" exact element={<Daftar />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/create" exact element={<Create/>}/>
          <Route path="/pendaftar" exact element={<Pendaftar/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default Routing;