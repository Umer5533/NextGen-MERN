import React from 'react';
import { useAuth } from './AdminAuthProvider.jsx';
import { Navigate } from 'react-router-dom';

function AdminProtectedRoute({ element }) {
    const [authUser] = useAuth();
console.log(authUser);
    return authUser ? element : <Navigate to="/" />;
}

export default AdminProtectedRoute;
