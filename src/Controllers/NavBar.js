import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import routes from "../shared/routes.js"


class NavBar extends Component {
  constructor(props) {
    super(props);


    this.state = {
      collapsed: true,
      name: "",
      email: ""
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.logOut = this.logOut.bind(this);

  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logOut() {

    Axios.patch("http://localhost:3001/currentSession", {
      "name": "",
      email: ""
    }).then(() => {
      console.log("Current Session Cleared")
    })
  }

  isLogged() {
    Axios.get("http://localhost:3001/currentSession").then((respond) => {
      this.setState({ name: respond.data.name, email: respond.data.email })
    })

  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand href="/" className="mr-auto">HAPPY PUPPY</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="ml-auto">
            
              <li>
                <Link to="/" onClick={this.logOut}>Deconectare</Link>
              </li>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar