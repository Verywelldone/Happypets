import React, { Component } from 'react';
import {Navbar,NavbarBrand, Nav } from 'reactstrap';
import allRouters from "./allRouters";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import routes from "../shared/routes"


class NavBar extends Component {
    render(){
        return(
            <div>
        <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">HAPPY PETS</NavbarBrand>
        <Nav className="ml-auto" navbar>

          <ul className="navbar-nav mr-auto">
              
            { routes.map(route => <li><Link to={route.path} className="nav-link"> {route.text} </Link></li>)}
          </ul>
          </Nav>
          </Navbar>
          <hr />
          
        </div>
        );
    }
}

export default NavBar