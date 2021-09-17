import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import axiosWithAuth from "./helpers/axiosWithAuth";


function App() {

  const handleLogout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href ='/'
      })
      .catch(err => {
        console.log(err)
      })
  }

  // console.log(window.location.href ='/' ) breaks it 
  
 
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="/" onClick={handleLogout}>logout</a>
        </header>
        <Switch>
            <Route path='/bubbles' component={BubblePage} />
            <Route path='/login' component={Login} />
            <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.