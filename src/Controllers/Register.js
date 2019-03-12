import React, {Component} from  "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import Axios from "axios";



class Register extends Component {
    constructor(){
        super();
        this.state = {
          name:"",
          address:"",
          email:"",
          password:""
        }
          
           this.createAcount = this.createAcount.bind(this); // initializare paht
       }

    ///    status 304 - NOT MODIFIED
    
    //   async getUsers(){
    //        Axios.get("http://localhost:3004/db").then(response =>
    //        response.data.results.map(users => ({
    //            name: `${users.name}`,
    //            address:`${users.address}`,
    //            email:`${users.email}`,
    //            password:`${users.password}`,
            
    //        })

    //        )
    //        ).then (users =>{
    //            this.setState({
    //                users,
    //                isLoadin:false
    //            });
    //        }).catch(error => this.setState({ error, isLoading: false }));
    //    }

       /* TERMIN IO MAINE AICI */
        test(){
            Axios.get('http://localhost:3001/users')
            .then(function (response) {
              // handle success
              for(let i=0;i<response.data.length;i++)
              console.log(response.data[i].email);
              
              console.log(this.state.email)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
       }
       
    
       /* DATA HANDLE */
            // functia de mai jos ( handleChange ) se ocupa de TOATE datele din input simultan.
       handleChange (event) {
        this.setState({[event.target.name]: event.target.value} )
      }
        /* cele 4 functii de mai jos, se ocupa fiecare de cate un singur input */
        handleName(name){
            this.setState({name: name.target.value});
             console.log(this.state.name + " AICI E NUMELE")
        }

        handleAddres(adr){
            this.setState({address: adr.target.value});
             console.log(this.state.name + " AICI E Adresa")
        }

        handleEmail(email){
            this.setState({email:email.target.value});
             console.log(this.state.email + " AICI E emailul")
        }
        handlePassword(pass){
            this.setState({password:pass.target.value});
             console.log(this.state.password + " AICI E Password")
        }

       /*
                        CONEXIUNE INTRE PAGINI 
       */
    //   componentDidMount(){
    //       this.getUsers();
    //       console.log(this.state.users);
    //   }
       createAcount(){
this.test();
        console.log(this.state.users)
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
                            <Input type="text" placeholder = "First and last name" name="name" onChange={event => this.handleName(event)} id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="address">Your address:</Label>
                            <Input type="text" placeholder = "Address here" onChange={event => this.handleAddres(event)} name="name" id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input type="email" placeholder = "email@email.com" onChange={event => this.handleEmail(event)} name="email" id=""/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password">Create a password:</Label>
                            <Input type="password" name="password" onChange={event => this.handlePassword(event)} id=""/>
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