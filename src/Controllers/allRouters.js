import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from "./Login.js"
import Register from "./Register"
import PrimaPagina from "./PrimaPagina"
import Host from "./hostPage"
import Client from "./clientPage"



class allRouters extends React.Component{

    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/Register' component={Register} />
                        <Route exact path='/PrimaPagina' component={PrimaPagina} />
                        <Route exact path='/hostPage' component={Host} />
                        <Route exact path='/clientPage' component={Client} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default allRouters