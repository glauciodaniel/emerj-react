import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './screens/About';
import App from './screens/App';
import Checkout from './screens/Checkout';
import Contact from './screens/Contact';
import Courses from './screens/Courses';
import CoursesSchedules from './screens/CoursesSchedules';
import Home from './screens/Home';
import Login from './screens/Login';
import Users from './screens/Users';
import UsersNew from './screens/UsersNew';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses-schedules" element={<CoursesSchedules />} />
        <Route path="users" element={<Users />}/>
        <Route path="users/new" element={<UsersNew />} />
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

