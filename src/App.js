// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Login from './components/Login';
import Usuarios from './components/Usuarios'; // Importa el componente Usuarios

function AppWithRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usuarios" element={<Usuarios />} /> {/* Configura la ruta para Usuarios */}
      </Routes>
    </Router>
  );
}

export default AppWithRouter;



