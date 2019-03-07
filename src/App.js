import React, { Component } from 'react';
import Login from "./Controllers/Login.js"
import './App.css';
import {Button} from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Login/>
            <Button>Submit</Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
