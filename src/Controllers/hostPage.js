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
                            <Input type="number" name="telefon" placeholder="0721201201"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                <ButtonGroup>
                <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>1 Zi</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>2 Zile</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>3 Zile</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>4 Zile</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(5)} active={this.state.rSelected === 5}>5 Zile</Button>
            </ButtonGroup>
                <p>Selecati: {this.state.rSelected}</p>
                </Col>
                </Row>
                <Row>
                <Button color="succses"></Button>
                </Row>
            </Form>
       </Container>
        )
    }
}
export default HostPage;