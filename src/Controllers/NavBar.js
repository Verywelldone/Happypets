import React, { Component } from 'react';
import {Navbar,NavbarBrand, Nav } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from "../shared/routes"


class NavBar extends Component {
    render(){
        return(
            <div>
              <Navbar className="navy" expand="md" fixed="top" color="light">
              <NavbarBrand href="/">HAPPY PETS</NavbarBrand>
              <Nav className="ml-auto" navbar>

                  { routes.map(route => <li><Link to={route.path} className="nav-link"> {route.text} </Link></li>)}
              
                </Nav>
                </Navbar><br />
            </div>

        );
    }
}

export default NavBar