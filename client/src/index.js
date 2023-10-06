import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css'
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Router>
    <App />
  </Router>
  
);


