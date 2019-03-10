import React, {Component} from  "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'



class Register extends Component {
    constructor(){
           super();
           this.createAcount = this.createAcount.bind(this); // initializare paht
       }

       /*
                        CONEXIUNE INTRE PAGINI 
       */
       createAcount(){
           const  path ="/";   // Path-ul 
           this.props.history.push(path);  /// redirect catre path
       }
    
    render(){

        return(
            
            <div id="primaPagina">
            <Col><h2>Register for a Happy Puppy</h2></Col>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label for="name">Your name:</Label>
                            <Input type="text" placeholder = "First and last name" name="name" id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="address">Your address:</Label>
                            <Input type="text" placeholder = "Address here" name="name" id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input type="email" placeholder = "email@email.com" name="email" id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password">Create a password:</Label>
                            <Input type="password" name="password" id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                      {/* apel path ^ */}
                      <Button color="danger" size="lg" block onClick={this.createAcount}>Sign Up</Button> 
                    </Col>
                      
                </Form>
            </div>
        
       
        )
    }
}

export default Register;