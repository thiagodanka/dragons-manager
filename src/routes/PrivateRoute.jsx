import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function PrivateRoute() {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) return <div>Carregando...</div>;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />; // Renderiza as rotas filhas protegidas
}