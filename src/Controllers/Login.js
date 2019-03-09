import React, { Component } from 'react';


import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback
} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
          this.state = {
          'email': '',
          'password': '',
          validate: {
            emailState: '',
          },
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
          if(email === "test@test.com" && password === "1234"){
            const  path ="/logged";

            this.props.history.push(path); 
          }else {
            const  path ="/Register";

            this.props.history.push(path);
          }
    
        }
      
        Register(){
            const  path ="/Register";
            this.props.history.push(path); 
        }

      render() {
        const { email, password } = this.state;
     
     return (
          <Container className="App">
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
                <Button onClick={this.LogIn}>LogIn</Button>
                <Button onClick={this.Register}>Register</Button>
              </Col>
          </Form>
          </Container>
        );
      }   
}


export default Login