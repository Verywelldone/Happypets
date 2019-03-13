import React from  "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./LoginCSS.css"


class PrimaPagina extends React.Component { 
    
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
              <Card body className="Card">
                <CardTitle>GĂZDUIEȘTE!</CardTitle>
                <Button color="danger" onClick={this.hostPage}>Înscrie-te acum</Button><br />
                <CardText><li>Îți stabilești singur programul de lucru</li></CardText>
                <CardText><li>Tu alegi talia animalului pe care îl găzduiești</li></CardText>
                <CardText><li>Câștigi bani cu ușurință</li></CardText>
                <CardText><li>Îți anunți disponibilitatea în momentul înregistrării</li></CardText>
              </Card>
            </Col>
            <Col sm="6">
              <Card body className="Card">
                <CardTitle>AI UN ANIMAL DE COMPANIE? <br />Poți pleca în vacanță fără grijă</CardTitle>
                <CardText><li>Toate gazdele sunt verificate de specialiștii noștri</li></CardText>
                <CardText><li>Poți solicita informații despre animalul tău de companie</li></CardText>
                <CardText><li>Animalul tău de companie se va simți ca acasă</li></CardText>
                <Button color="warning" onClick={this.clientPage}>Rezervă o gazdă HAPPY PUPPY!</Button>
              </Card>
            </Col>
          </Row>
        );
        } 
          
      }
   

export default PrimaPagina;