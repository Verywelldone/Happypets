import React, {Component} from  "react";
// import { Button } from "reactstrap";
// import "./LoginCSS.css"
// import Card from "./PrimaPagina"


class PrimaPagina extends Component {
    // constructor(){
    //     super();
    //     this.hostPage = this.hostPage.bind(this);
    //     this.clientPage = this.clientPage.bind(this);
    // }
    // hostPage(){
    //     const path ="/hostPage";
    //     this.props.history.push(path);  
    // }
    
    // clientPage(){
    //     const path ="/clientPage";
    //     this.props.history.push(path);  
    // }

    render(){

        return(

        
        <div id ="primaPagina">
                <Card />
            {/* <form action="">
                <Button onClick={this.hostPage}>Host</Button>
                <Button onClick={this.clientPage}>Client</Button>
            </form> */}
        </div>
        )
    }
}

export default PrimaPagina;