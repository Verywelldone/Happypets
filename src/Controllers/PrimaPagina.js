import React, {Component} from  "react";
import { Button } from "reactstrap";
import "./LoginCSS.css"


class PrimaPagina extends Component {
    constructor(){
        super();
        this.hostPage = this.hostPage.bind(this);
        this.clientPage = this.clientPage.bind(this);
    }
    hostPage(){
        const path ="/hostPage";
        this.props.history.push(path);  
    }
    
    clientPage(){
        const path ="/clientPage";
        this.props.history.push(path);  
    }

    render(){

        return(

        
        <div id ="primaPagina">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias ea corrupti alias officiis dolore aspernatur id commodi accusamus ex explicabo consequatur, porro quasi. Repudiandae molestias excepturi omnis voluptatum corrupti!</p>
            <form action="">
                <Button onClick={this.hostPage}>Host</Button>
                <Button onClick={this.clientPage}>Client</Button>
            </form>
        </div>
        )
    }
}

export default PrimaPagina;