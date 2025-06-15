import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@pages/Login/Login';
import DragonList from '@pages/DragonList/DragonList';
import CreateDragon from '@pages/CreateDragon/CreateDragon';
import DragonDetails from '@pages/DragonDetails/DragonDetails';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
            </Route>

            {/* Rotas protegidas*/}
            <Route element={<PrivateRoute />}>
                <Route path="/dragons/:id" element={<DragonDetails />} />
                <Route path="/dragons" element={<DragonList />} />
                <Route path="/dragons/create" element={<CreateDragon />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Route>

            {/* Rota fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}