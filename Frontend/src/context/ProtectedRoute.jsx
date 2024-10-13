import React from 'react';
import { useAuth } from './AuthProvider.jsx';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element }) {
    const [authUser] = useAuth();

    return authUser ? element : <Navigate to="/signup" />;
}

export default ProtectedRoute;
