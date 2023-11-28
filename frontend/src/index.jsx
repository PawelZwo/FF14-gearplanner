// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components imports
import App from './App';

// CSS imports
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
