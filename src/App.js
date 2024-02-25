import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import CreateQRCode from './pages/forms/CreateQRCode';
import EditQRCode from './pages/forms/EditQRCode';
import QRCodeReady from './pages/QR/QRCodeReady';
import QRCodeDisplay from './pages/QR/QRCodeDisplay';

import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App overflow-hidden font-raleway flex flex-col min-h-screen">
        <Link to={'/'} className='py-5 px-3 uppercase bg-blue-800 text-white text-center text-lg font-extrabold'>bankshare</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create" element={<CreateQRCode />} />
          <Route path="/edit/:id" element={<EditQRCode />} /> 
          <Route path="/qr-ready/:id" element={<QRCodeReady />} />
          <Route path="/qr/:id" element={<QRCodeDisplay />} /> 
        </Routes>
    </div>
  );
}

export default App;
