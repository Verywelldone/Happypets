import React, {Component} from  "react";

import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

class ClientPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:"",
            animal:"",
            daysNumber:"",
            comments:""
        }
        this.animalTypeChange=this.animalTypeChange.bind(this);
        this.numberOfDaysChange=this.numberOfDaysChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleComments = this.handleComments.bind(this);
        this.saveDataInDB = this.saveDataInDB.bind(this);
    }
    

        

    handleNameChange(event){
        this.setState({name : event.target.value});
        console.log(this.state.name + " name ")
    }

    numberOfDaysChange(event) {
        this.setState({daysNumber:event.target.value});
        console.log(this.state.daysNumber + " days ")
      }

    animalTypeChange(event){
        this.setState({animal:event.target.value});
        console.log(this.state.animal + " animal ")
  
    }
    handleComments(event){
        this.setState({comments:event.target.value})
        console.log(this.state.comments + " comments ")
    }
    
   componentDidMount(){
       if(this.state.daysNumber === ""){
          this.setState({daysNumber:"1"})
       }
   }

    saveDataInDB(){
      
            if(this.state.daysNumber === "")
                 this.setState({daysNumber:"1"})
        
        axios.post("http://localhost:3001/clients",{
            name:this.state.name,
            animal:this.state.animal,
            daysNumber:this.state.daysNumber,
            comments:this.state.comments
         }).then(()=>{
             
            const  path ="/PrimaPagina";   // Path-ul 
            this.props.history.push(path);  /// redirect catre path
         }).catch(function (error) {
            // AICI CRAPA
            console.log(error);
          })
    }

    render(){
    return(
        <Container id ="clientPage">
        <br/>
            <Form className="space">
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="nume">Nume complet</Label>
                            <Input type="text" name="text" id="" placeholder="Popescu Ion"   onChange={event => this.handleNameChange(event)} />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                <legend className="col-form-label">Animal de companie</legend>
                <Col sm={12}>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" value ="mica" onChange={event => this.animalTypeChange(event)}/>
                        Caine de talie mica
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" value="medie" onChange={event => this.animalTypeChange(event)}/>
                        Caine de talie medie
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" value="mare" onChange={event => this.animalTypeChange(event)}/>
                        Caine de talie mare
                        </Label>
                    </FormGroup>
                </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={4}>Alege nr de zile</Label>
                    <Col sm={8}>
                    <Input type="select" name="select" placeholder="Select number of days" id="exampleSelect" onChange={event => this.numberOfDaysChange(event)}>

                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={4}>Lasa un comentariu</Label>
                    <Col sm={8}>
                    <Input type="textarea" name="text" id="exampleText"  onChange={event => this.handleComments(event)} />
                    </Col>
                </FormGroup>
                <Button color="danger" onClick={this.saveDataInDB}>Cauta o gazda</Button>
                
            </Form>
            <br/>
        </Container>
    )
    }
}
export default ClientPage;