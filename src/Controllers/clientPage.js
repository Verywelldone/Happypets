import React, {Component} from  "react";

import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ClientPage extends Component {
render(){
    return(
        <Container id ="clientPage">
        <br/>
            <Form>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="nume">Nume complet</Label>
                            <Input type="text" name="text" id="" placeholder="Popescu Ion" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                <legend className="col-form-label">Animal de companie</legend>
                <Col sm={12}>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" />
                        Caine de talie mica
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" />
                        Caine de talie medie
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" />
                        Caine de talie mare
                        </Label>
                    </FormGroup>
                </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={4}>Alege nr de zile</Label>
                    <Col sm={8}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1 zi</option>
                        <option>2 zile</option>
                        <option>3 zile</option>
                        <option>4 zile</option>
                        <option>5 zile</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={4}>Lasa un comentariu</Label>
                    <Col sm={8}>
                    <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <Button color="danger">Cauta o gazda</Button>
                
            </Form>
            <br/>
        </Container>
    )
    }
}
export default ClientPage;