import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route /*Link*/ } from 'react-router-dom';
import NavBar from "./Controllers/NavBar";
import routes from './shared/routes';


/* 

    json-server --watch database.json --port 3001

*/
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <NavBar/>
            <Switch>
                { routes.map( route => <Route key={route.id.toString()} exact path={ route.path } component={ route.component } />) }
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
