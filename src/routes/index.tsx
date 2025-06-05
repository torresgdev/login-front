import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const AppRoutes: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={LoginPage} />

                <Route path="/login" element={LoginPage} />

                <Route path="/register" element={RegisterPage} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;