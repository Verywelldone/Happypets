import React, {Component} from  "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'



class Register extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            address:'',
            email:'',
            password:''

        }
          
           this.createAcount = this.createAcount.bind(this); // initializare paht
       }


       /* DATA HANDLE */
       handleChange (event) {
        this.setState({[event.target.name]: event.target.value} )
        console.log(this.state.password + " PASSWORD");
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
            
            //  onChange din inputs parseaza numele inputului in state-ul din constructor prin functia handleChange
            //  functia handleChange, in functie de parametrul primit ( numele inputului ) alege ce obiect din state trebuie modificat
            
            <div id="primaPagina">
            <Col><h2>Register for a Happy Puppy</h2></Col>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label for="name">Your name:</Label>
                            <Input type="text" placeholder = "First and last name" name="name" onChange={event => this.handleChange(event)} id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="address">Your address:</Label>
                            <Input type="text" placeholder = "Address here" onChange={event => this.handleChange(event)} name="name" id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input type="email" placeholder = "email@email.com" onChange={event => this.handleChange(event)} name="email" id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password">Create a password:</Label>
                            <Input type="password" name="password" onChange={event => this.handleChange(event)} id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                      {/* apel path ^ */}
                      <Button color="danger" size="lg" block onClick={this.createAcount}>Sign Up</Button> 
                    </Col>
                      
                </Form>
                <br />
            </div>
        
       
        )
    }
}

export default Register;