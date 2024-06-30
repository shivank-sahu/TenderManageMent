// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import UserView from './pages/UserView';
import UserLogin from './components/User/UserLogin';
import UserRegistration from './components/User/UserRegistration';
import './App.css';
import AdminRegister from './components/Admin/AdminRegister';
import AdminLogin from './components/Admin/AdminLogin';
import ProtectedAdminRoute from './components/Common/ProtectedAdminRoute';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<ProtectedAdminRoute><AdminPanel /></ProtectedAdminRoute>} />
          <Route path="/user" element={<UserView />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/register" element={<UserRegistration />} />
          {/* <Route path="/" element={<UserView />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
