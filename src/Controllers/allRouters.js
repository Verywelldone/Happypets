import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from "./Login.js"
import Register from "./Register"
import PrimaPagina from "./PrimaPagina"
import Host from "./hostPage"
import Client from "./clientPage"
import NavBar from "./NavBar"


class allRouters extends React.Component{

    render(){
        return(
            <div>
            <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/PrimaPagina' component={PrimaPagina} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/hostPage' component={Host} />
              <Route exact path='/clientPage' component={Client} />
          </Switch>
          
        </div>
        
      
      </Router>
          
            </div>
        )
    }
}

export default allRouters