import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestContext from './TestContext';

ReactDOM.render(
  <React.StrictMode>
  <TestContext>
    <App />
    </TestContext>
  </React.StrictMode>,
  document.getElementById('root')
);