// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // ✅ Correct
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ActiveSectionProvider } from './context/ActiveSectionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActiveSectionProvider>
      <App />
    </ActiveSectionProvider>
  </React.StrictMode>
);

reportWebVitals();
