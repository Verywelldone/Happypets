import React, { Component } from 'react';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback
} from 'reactstrap';

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
          "name":" "
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
          [ name ]: value,
        });
      }
    
      submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${ this.state.email }`)
        console.log(`Password: ${ this.state.password}`)
      }
    

      LogIn(){
          const { email, password } = this.state;

          Axios.get("http://localhost:3001/users")
          .then( (response) => {
            for(let i=0;i<response.data.length;i++){

              if(response.data[i].email == email 
                && response.data[i].password == password){
                  this.setState({name:response.data[i].name})
                    console.log("m-am logat")

                    /* Sesiune logare -- user conectat*/ 
                        Axios.post("http://localhost:3001/currentSession",{
                          "name":this.state.name,
                          "email":this.state.email
                        }).then((response)=>{
                          console.log(response);
                          console.log("New session created");
                     })
                  const  path ="/PrimaPagina";   // Path-ul 
                  this.props.history.push(path);
                  return
              }
           }
           const  path ="/";
           alert("User sau email invalid");
          this.props.history.push(path);
          })
        }
      
        Register(){
            const  path ="/Register";
            this.props.history.push(path); 
        }

      render() {
        const { email, password } = this.state;
     
     return (
          <Container className="loginForm">
            <h2>Sign In</h2>
            <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
              <Col>
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    value={ email }
                    valid={ this.state.validate.emailState === 'has-success' }
                    invalid={ this.state.validate.emailState === 'has-danger' }
                    onChange={ (e) => {
                                this.validateEmail(e)
                                this.handleChange(e)
                              } }
                  />
                  <FormFeedback valid>
                    That's a tasty looking email you've got there.
                  </FormFeedback>
                  <FormFeedback>
                  Email-ul nu este valid.
                  </FormFeedback>
                  <FormText>Your username is most likely your email.</FormText>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    value={ password }
                    onChange={ (e) => this.handleChange(e) }
                />
                </FormGroup>
                <Button color="warning" size="lg" block onClick={this.LogIn}>Sign In</Button>
                <Button color="success" size="lg" block onClick={this.Register}>Sign Up</Button>
                <br/>
              </Col>
          </Form>
          </Container>
        );
      }   
}


export default Login