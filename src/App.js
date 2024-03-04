import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import CreateQRCode from './pages/forms/CreateQRCode';
import EditQRCode from './pages/forms/EditQRCode';
import QRCodeReady from './pages/QR/QRCodeReady';
import QRCodeDisplay from './pages/QR/QRCodeDisplay';
import { useAuth } from './context/authContext';

import { Link } from 'react-router-dom';
function App() {

  const { user } = useAuth();
  
  return (
    <div className="App overflow-hidden font-raleway flex flex-col min-h-screen">
        <Link to={'/'} className='py-5 px-3 uppercase bg-blue-800 text-white text-center text-lg font-extrabold'>bankshare</Link>
        <Routes>
          {/* Redirect based on authentication state */}
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Protected Routes */}
          <Route path="/create" element={user ? <CreateQRCode /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={user ? <EditQRCode /> : <Navigate to="/login" />} /> 
          <Route path="/qr-ready/:id" element={user ? <QRCodeReady /> : <Navigate to="/login" />} />
          <Route path="/qr/:id" element={<QRCodeDisplay />}/> 
        </Routes>
    </div>
  );
}

export default App;
