import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import ConfirmedBooking from './components/ConfirmedBooking';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<CallToAction />} />
      <Route path="menu" element={<Specials />} />
      <Route path="reservations" element={<Main />} />
      <Route path="confirmedbooking" element={<ConfirmedBooking />} />
    </Routes>
    <CustomersSay />
    <Chicago />
    <Footer/>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
