import React, {Component} from  "react";
import { Button, Form, Container, FormGroup, Label, Input, Col } from 'reactstrap'
import "./register.css"
import Axios from "axios";


let lastID;
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
          name:"",
          address:"",
          email:"",
          password:""
        }
          
           this.createAcount = this.createAcount.bind(this); // initializare paht
       }

         /* DATA HANDLE */
            // functia de mai jos ( handleChange ) se ocupa de TOATE datele din input simultan.
    //    handleChange (event) {
    //     this.setState({[event.target.name]: event.target.value} )
    //   }
        /* cele 4 functii de mai jos, se ocupa fiecare de cate un singur input */
        handleName(name){
            this.setState({name: `${name.target.value}`});
            //  console.log(this.state.name + " AICI E NUMELE")
        }

        handleAddres(adr){
            this.setState({address: `${adr.target.value}`});
            //  console.log(this.state.address + " AICI E Adresa")
        }

        handleEmail(email){
            this.setState({email:email.target.value});
            //  console.log(this.state.email + " AICI E emailul")
        }
        handlePassword(pass){
            this.setState({password:pass.target.value});
            //  console.log(this.state.password + " AICI E Password")
        }

        test(){
            Axios.get('http://localhost:3001/users')
            .then( (response) => {
              // handle success
              let i=response.data.length;
              lastID= response.data[i-1].id;
               console.log(lastID);
              for(let i=0;i<response.data.length;i++){

                if(response.data[i].email === this.state.email){
                console.log("Email already exists.")
  
                    const  path ="/Register";   // Refresh page.
                    this.props.history.push(path);
                    return
                }
             }
               
                Axios.post('http://localhost:3001/users', {
                    id:parseInt(lastID)+1 + "",
                    name: this.state.name,
                    address:this.state.address,
                    email:this.state.email,
                    password:this.state.password,
                    
                }).then((response)=>{
                  console.log(response);
                  console.log("New account created.");
             })
            
            //   console.log(this.state.email+ " EMAIL DIN TEST");
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
       }


    formData(){
        console.log(this.state.email + " EMAIL din formData");
        console.log(this.state.password + " PASS DIN formData");
        console.log(this.state.name + " NAME din formData");
        console.log(this.state.address +" Address din formData");
    }
       createAcount(){
        //    this.formData();
            this.test();

                const  path ="/";   // Path-ul 
           this.props.history.push(path);  /// redirect catre path
       }
    
    render(){

        return(
            
            //  onChange din inputs parseaza numele inputului in state-ul din constructor prin functia handleChange
            //  functia handleChange, in functie de parametrul primit ( numele inputului ) alege ce obiect din state trebuie modificat
            
            <div>
            <h2>Creează un cont Happy Puppy</h2>
            <Container id ="register">
                <Form className="space">
                    <Col>
                        <FormGroup>
                            <Label for="name">Your name:</Label>
                            <Input type="text" placeholder = "First and last name" name="name" onChange={event => this.handleName(event)} id="name"/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="address">Your address:</Label>
                            <Input type="text" placeholder = "Address here" onChange={event => this.handleAddres(event)} name="name" id="address"/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input type="email" placeholder = "email@email.com" onChange={event => this.handleEmail(event)} name="email" id="email"/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password">Create a password:</Label>
                            <Input type="password" name="password" onChange={event => this.handlePassword(event)} id="password"/>
                        </FormGroup>
                    </Col>
                    <Col>
                      {/* apel path ^ */}
                      <Button color="danger" size="lg" block onClick={this.createAcount}>Sign Up</Button> 
                    </Col>
                      
                </Form>
            </Container>
                <br />
            </div>
        
       
        )
    }
}

export default Register;