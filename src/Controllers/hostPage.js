import React, { Component } from "react";
import "./host-page.css";
import { Col, Row, ButtonGroup, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios"
import MapAPI from "./MapAPI"


class HostPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: "",
            name: "",
            address: "",
            phone: ""
        };

        this.handleSelected = this.handleSelected.bind(this);
        this.saveInDatabase = this.saveInDatabase.bind(this);
    }

    saveInDatabase() {
        var objMap = this.refs.the_map;
        this.state.lat = objMap.state.lat;
        this.state.lng = objMap.state.lng;
        axios.post("http://localhost:3001/hosts", {
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            days: this.state.days,
            lat: this.state.lat,
            lng: this.state.lng
        }).then(respond => {
            console.log(respond);

            const path = "/PrimaPagina";   // Path-ul 
            this.props.history.push(path);  /// redirect catre path
        })

    }

    handleSelected(event) {
        this.setState({ days: event.target.value });
        // console.log(this.state.days+ " NUmber of days")

    }
    handleName(event) {
        this.setState({ name: event.target.value })
        console.log("name  " + this.state.name)
    }
    handleAddres(event) {
        this.setState({ address: event.target.value })
        console.log("address  " + this.state.address)
    }
    handlePhone(event) {
        this.setState({ phone: event.target.value });
        console.log("phone  " + this.state.phone)
    }


    render() {
        return (
            <div className="row">
                <div className="col-sm-5" id="hostPage">
                    <h5 className="header-title">Înregistrează-te pentru a găzdui un animal de companie</h5>
                    <Form>
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="nume">Nume complet:</Label>
                                    <Input type="text" name="text" placeholder="Nume Prenume:" onChange={event => this.handleName(event)} />
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
                                    <Button color="primary" value="1" onClick={event => this.handleSelected(event)}>1</Button>
                                    <Button color="primary" value="2" onClick={event => this.handleSelected(event)}>2</Button>
                                    <Button color="primary" value="3" onClick={event => this.handleSelected(event)}>3</Button>
                                    <Button color="primary" value="4" onClick={event => this.handleSelected(event)}>4</Button>
                                    <Button color="primary" value="5" onClick={event => this.handleSelected(event)}>5</Button>
                                </ButtonGroup>
                                <p>Selectați {this.state.days} zile.</p>
                            </Col>
                        </Row>

                        <Button color="primary" onClick={this.Thanks}>Găzduiește!</Button>

                    </Form>
                </div>
                <div className="col-sm-7 harta">{/* Dupa ce dai click pe GAZDUIESTE, inregistrarea ta se va afisa aici*/}
                    <MapAPI ref="the_map" />
                </div>

            </div>
        )
    }
}
export default HostPage;