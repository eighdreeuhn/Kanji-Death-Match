import React from 'react';
import { ReactDOM as Router } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(

  <Router>
    <App/>
  </Router>)

