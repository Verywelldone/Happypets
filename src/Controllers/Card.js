import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';




class Cards extends React.Component { 
    
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

    render() {
        return (
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button onClick={this.hostPage}>Host</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button onClick={this.clientPage}>Client</Button>
              </Card>
            </Col>
          </Row>
        );
        } 
          
      }

export default Cards;