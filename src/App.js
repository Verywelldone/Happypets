import React, { Component } from 'react';

<<<<<<< HEAD
=======
import routes from './shared/routes';
import NavBar from "./Controllers/NavBar"

>>>>>>> 38e56ec14b7449a1a408e9260a21fc622868c090
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, /*Link*/ } from 'react-router-dom';


/* 

    json-server --watch database.json --port 3001

*/
class App extends Component {
  render() {
    return (
<<<<<<< HEAD

      
      <div className="App">

=======
      
      <div className="App">
>>>>>>> 38e56ec14b7449a1a408e9260a21fc622868c090
        <Router>
          {/* <header className="App-header"> */}
          <>
            <NavBar/>
            
            <Switch>
                { routes.map( route => <Route exact path={ route.path } component={ route.component } />) }
            </Switch>
          </>
          
      
      </Router>
          
      </div>
    );
  }
}

export default App;
