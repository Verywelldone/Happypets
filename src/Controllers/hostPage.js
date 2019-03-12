import React, {Component} from  "react";
import "./LoginCSS.css";
import { Container, Col, Row, ButtonGroup, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class HostPage extends Component {
    constructor (props) {
        super(props);
    
        this.state = { cSelected: [] };
    
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      }
    
      onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
      }
render(){
    return(
       <Container id ="hostPage">
            <Form>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="nume">Nume complet:</Label>
                            <Input type="text" name="text" placeholder="Nume Prenume:"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="adresa">Adresa Completa:</Label>
                            <Input type="adres" name="adres" placeholder="Strada:"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="number">Telefon</Label>
                            <Input type="number" name="telefon" placeholder="0123456789"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <legend className="col-form-label">Selectati numarul de zile</legend>
                <ButtonGroup>
                <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>1 Zi</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>2 Zile</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>3 Zile</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>4 Zile</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(5)} active={this.state.rSelected === 5}>5 Zile</Button>
            </ButtonGroup>
                <p>Selecati: {this.state.rSelected} zile</p>
                </Col>
                </Row>
               
                <Button id="submit-button" class="submit-btn" color="success" onClick={alert("Thank you")}>Gazduiestea</Button>
                <svg class="loader-svg">
                <path stroke="#CCCCCC" fill="none" stroke-width="4" d="M25,2.5A22.5,22.5 0 1 1 2.5,25A22.5,22.5 0 0 1 25,2.5"></path></svg>
                <svg class="loader-svg">
                <path stroke="#20BF7E" fill="none" stroke-width="4" d="M25,2.5A22.5,22.5 0 1 1 2.5,25A22.5,22.5 0 0 1 25,2.5"></path></svg>


            </Form>
       </Container>
        )
    }
}
export default HostPage;