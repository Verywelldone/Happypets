import React, {Component} from  "react";
import "./first-page-style.css";
import { Container, Col, Row, ButtonGroup, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios"

class HostPage extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
             days:"",
             name:"",
             address:"",
             phone:""
         };
    
        this.handleSelected = this.handleSelected.bind(this);
        this.saveInDatabase=this.saveInDatabase.bind(this);
      }
    
      saveInDatabase(){
            axios.post("http://localhost:3001/hosts", {
                name:this.state.name,
                address:this.state.address,
                phone:this.state.phone,
                days:this.state.days
            }).then(respond =>{
                console.log(respond);

                const  path ="/PrimaPagina";   // Path-ul 
                this.props.history.push(path);  /// redirect catre path
            })

      }

      handleSelected(event) {
        this.setState({ days:event.target.value });
        // console.log(this.state.days+ " NUmber of days")
    
    }

      
      handleName(event){
          this.setState({name: event.target.value})
          console.log("name  "+  this.state.name)
      }
      handleAddres(event){
          this.setState({address:event.target.value})
          console.log("address  "+  this.state.address)
      }
      handlePhone(event){
          this.setState({phone:event.target.value});
          console.log("phone  "+  this.state.phone)
      }


render(){
    return(
       <Container id ="hostPage">
            <Form className="space">
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="nume">Nume complet:</Label>
                            <Input type="text"  name="text" placeholder="Nume Prenume:" onChange={event => this.handleName(event)} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="adresa">Adresa Completă:</Label>
                            <Input type="adres" name="adres" placeholder="Strada:" onChange={event => this.handleAddres(event)} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="number">Telefon</Label>
                            <Input type="number" name="telefon" placeholder="0123456789" onChange={event => this.handlePhone(event)} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <legend className="col-form-label">Selectați numărul de zile:</legend>
                <ButtonGroup>
                    <Button color="primary" value="1" onClick={event=> this.handleSelected(event)}>1</Button>
                    <Button color="primary" value="2" onClick={event=> this.handleSelected(event)}>2</Button>
                    <Button color="primary" value="3" onClick={event=> this.handleSelected(event)}>3</Button>
                    <Button color="primary" value="4" onClick={event=> this.handleSelected(event)}>4</Button>
                    <Button color="primary" value="5" onClick={event=> this.handleSelected(event)}>5</Button>
                </ButtonGroup>
                <p>Selectați {this.state.days} zile.</p>
                </Col>
                </Row>
               
                <Button color="success" onClick={this.saveInDatabase}>Gazduiește!</Button>

            </Form>
       </Container>
        )
    }
}
export default HostPage;