import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MercadoPagoComponent from './components/MercadoPago';
import MercadoPagoCheckout from './components/MercadoPagoCheckout';
import About from './screens/About';
import App from './screens/App';
import Checkout from './screens/Checkout';
import Contact from './screens/Contact';
import Courses from './screens/Courses';
import CoursesSchedules from './screens/CoursesSchedules';
import Home from './screens/Home';
import Login from './screens/Login';
import MercadoPago from './screens/MercadoPago';
import Users from './screens/Users';
import UsersNew from './screens/UsersNew';
import createGlobalStyle from './styles/global';

const GlobalStyle = createGlobalStyle;

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
        <Route path="mercadopago" element={<MercadoPagoComponent />} />
        <Route path="mercadopagocheckout" element={<MercadoPago />} />
      </Routes>
      <React.StrictMode>
         <GlobalStyle />
      </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

