import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./login-form.css"

import {
  Col, Form,
  FormGroup, Label, Input,
  Button, FormFeedback
} from 'reactstrap';

// import isLogged from "../shared/LogContext"
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'email': '',
      'password': '',
      validate: {
        emailState: '',
      },
      "name": " "
    }
    this.handleChange = this.handleChange.bind(this);
    this.LogIn = this.LogIn.bind(this);
    this.Register = this.Register.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate })
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`)
    console.log(`Password: ${this.state.password}`)
  }


  LogIn() {
    const { email, password } = this.state;

    Axios.get("http://localhost:3001/users")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {

          if (response.data[i].email === email
            && response.data[i].password === password) {
            this.setState({ name: response.data[i].name })
            console.log("m-am logat")

            /* Sesiune logare -- user conectat*/
            Axios.post("http://localhost:3001/currentSession", {
              "name": this.state.name,
              "email": this.state.email
            }).then((response) => {


            })
            const path = "/About";   // Path-ul 
            this.props.history.push(path);
            return
          }
        }
        function closeIt() {
          return;
        }
        alert("User sau email invalid");
        this.props.history.push(closeIt);
      })
  }

  Register() {
    const path = "/Register";
    this.props.history.push(path);
  }

  render() {
    const { email, password } = this.state;

    return (
      <>
        {/* <div>HAPPY PUPPY-LOGO</div> */}
        <div className="loginForm">
          <h2 className="login-title">Bine ai venit!</h2>
          <Form className="form" onSubmit={(e) => this.submitForm(e)}>
            <Col>
              <FormGroup>
                <Label><strong>Introdu adresa de email</strong></Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                  value={email}
                  valid={this.state.validate.emailState === 'has-success'}
                  invalid={this.state.validate.emailState === 'has-danger'}
                  onChange={(e) => {
                    this.validateEmail(e)
                    this.handleChange(e)
                  }}
                />
                <FormFeedback valid>
                  That's a tasty looking email you've got there.
                  </FormFeedback>
                <FormFeedback>
                  Email-ul nu este valid.
                  </FormFeedback>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword"><strong>Introdu parola</strong></Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                  value={password}
                  onChange={(e) => this.handleChange(e)}
                />
              </FormGroup>
              <Button className="login-buton" size="lg" block onClick={this.LogIn}>Continuă</Button>
              <hr />
              <p>Nu ai cont? <Link to="/Register" onClick={this.Register}>Creează cont</Link></p>
            </Col>
          </Form>
        </div>
        <p className="first-paragraph">Ai nevoie de ajutor?</p>
        <footer className="footer-login">
          <span>Date cu caracter personal |</span>
          <span> Politica de cookieuri |</span>
          <span> Politica de confidențialitate</span>
        </footer>
      </>
    );
  }
}


export default Login