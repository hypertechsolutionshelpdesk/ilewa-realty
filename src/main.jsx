import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { PropertyProvider } from '@/context/PropertyContext';
import App from '@/App';
import '@/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </HelmetProvider>
  </React.StrictMode>
);
