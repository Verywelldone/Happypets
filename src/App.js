import React, { Component } from 'react';

import routes from './shared/routes';
import NavBar from "./Controllers/NavBar"

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, /*Link*/ } from 'react-router-dom';


/* 

    json-server --watch database.json --port 3001

*/
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          {/* <header className="App-header"> */}
          <>
            <NavBar/>
            
            <Switch>
                { routes.map( route => <Route exact path={ route.path } component={ route.component } />) }
            </Switch>
          </>
          
      
      </Router>
          
          {/* </header> */}
      </div>
    );
  }
}

export default App;
