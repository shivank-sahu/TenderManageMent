import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('adminToken');
    return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectedAdminRoute;
