import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import weatherStore from './redux/weatherStore.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={weatherStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
