import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@pages/Login/Login';
import DragonList from '@pages/DragonList/DragonList';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
            </Route>

            {/* Rota pai protegida */}
            <Route element={<PrivateRoute />}>
                <Route path="/dragons" element={<DragonList />} />
            </Route>

            {/* Rota fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}
