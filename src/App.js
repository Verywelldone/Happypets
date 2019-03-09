import React, { Component } from 'react';
import './App.css';

import Login from "./Controllers/Login.js"
import Register from "./Controllers/Register"
import PrimaPagina from "./Controllers/PrimaPagina"

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       
        <Router>
        <div>
          <hr />
          <Switch>
              <Route exact path='/' component={Login} />
              <Route  exact path='/Logged' component={PrimaPagina} />
              <Route  exact path='/Register' component={Register} />
              
          </Switch>
          
        </div>
        
      
      </Router>
          
          </header>
      </div>
    );
  }
}

export default App;
