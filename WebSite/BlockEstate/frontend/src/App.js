import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import MenuPage from './components/MenuPage';
import AdminDashboard from './components/AdminDashboard';
import UserProfile from './components/UserProfile';
import ForgotPassword from './components/ForgotPassword';
import AboutPage from './components/AboutPage';
import RealEstateIntegration from './components/RealEstateIntegration';
import PropertyListingsPage from './components/PropertyListingsPage';


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('access');
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
            
            <Route path="/sell" element={ <ProtectedRoute> <RealEstateIntegration /> </ProtectedRoute>} />
            <Route path="/buy" element={<ProtectedRoute><PropertyListingsPage /></ProtectedRoute>} /> 

            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;