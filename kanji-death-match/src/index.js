import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(

  <Router basename={process.env.PUBLIC_URL}>
    <App/>
  </Router>,)

