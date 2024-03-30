import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RequestsProvider } from './context/Requests';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RequestsProvider>
      <App />

    </RequestsProvider>
  </React.StrictMode>
);
