import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './screens/About';
import App from './screens/App';
import Contact from './screens/Contact';
import Courses from './screens/Courses';
import Home from './screens/Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

