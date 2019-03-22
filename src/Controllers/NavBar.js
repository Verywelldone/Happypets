import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from "../shared/routes"
// import Axios from 'axios';


class NavBar extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
          collapsed: true
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);

      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
      
    

      render() {
        return (
          <div>
            <Navbar color="light" light expand="md" fixed="top">
              <NavbarBrand href="/" className="mr-auto">HAPPY PUPPY</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar className="ml-auto">
                     { routes.map(route => <li key={route.id}><Link to={route.path} className="nav-link"> {route.text} </Link></li>)}
                    <Button outline color="success" size="sm" onClick={this.logOut}>LogOut</Button>
                </Nav>
          
              </Collapse>
            </Navbar>
          </div>
        );
      }
    }

export default NavBar