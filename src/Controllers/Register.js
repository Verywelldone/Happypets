import React, {Component} from  "react";
import {Button} from "reactstrap"


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
                <form action="">
                          Email
                         <br/> <input type="email" placeholder = "email" name="email" id=""/>
                        <br/>
                      Password 
                       <input type="password" name="password" id=""/>
                
                      <br/> 
                      {/* apel path ^ */}
                      <Button onClick={this.createAcount}>Register</Button> 
                      
                </form>
            </div>
        
       
        )
    }
}

export default Register;