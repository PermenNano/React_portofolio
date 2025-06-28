// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Portofolio  from './MainPortofolio';
import './portofolio.css';
import "tailwindcss";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portofolio />
  </React.StrictMode>,
);