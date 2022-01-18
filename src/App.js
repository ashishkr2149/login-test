import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import CreateUser from './CreateUser';
import { TestState } from './TestContext';
import './App.css';

const App = () => {
  const{ route, setRoute } = TestState();
    console.log(route)

  return (
    <div>
      {
        route === "login"?
        <Login />:
        <Dashboard />
      }
    </div>
  )
}

export default App