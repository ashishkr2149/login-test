import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {
  const [route, setRoute] = useState("login");

  const onRoutechange=(page)=>{
    setRoute(page);
  }

    console.log(route)

  return (
    <div>
      {
        route === "login"?
        <Login onRoutechange={onRoutechange} />:
        <Dashboard />
      }
    </div>
  )
}

export default App