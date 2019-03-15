import React, { Component } from 'react';
import {Navbar,NavbarBrand, Nav } from 'reactstrap';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

=======
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
>>>>>>> 63d11185a9160cd4abdae7bcd6cf8cf3254a4578
import routes from "../shared/routes"


class NavBar extends Component {
    render(){
        return(
            <div>
              <Navbar className="navy" expand="md" fixed="top" color="light">
              <NavbarBrand href="/">HAPPY PETS</NavbarBrand>
              <Nav className="ml-auto" navbar>

                  { routes.map(route => <li><Link to={route.path} className="nav-link"> {route.text} </Link></li>)}
              
<<<<<<< HEAD
            { routes.map(route => <li key={route.id}><Link to={route.path} className="nav-link"> {route.text} </Link></li>)}
          </ul>
          </Nav>
          </Navbar>
          <hr />
          
        </div>
=======
                </Nav>
                </Navbar><br />
            </div>

>>>>>>> 63d11185a9160cd4abdae7bcd6cf8cf3254a4578
        );
    }
}

export default NavBar