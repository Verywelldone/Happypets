import React from  "react";
<<<<<<< HEAD
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import "./LoginCSS.css"
=======
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
>>>>>>> 38e56ec14b7449a1a408e9260a21fc622868c090


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
          <div id="cardsid">
            <Row>
              <Col sm="6">
                <Card body className="Card">
                  <CardTitle>GĂZDUIEȘTE!</CardTitle>
                  <Button color="danger" onClick={this.hostPage}>Înscrie-te acum</Button><br />
                  <CardText><li>Îți stabilești singur programul de lucru</li></CardText>
                  <CardText><li>Tu alegi talia animalului pe care îl găzduiești</li></CardText>
                  <CardText><li>Câștigi bani cu ușurință</li></CardText>
                  <CardText><li>Îți anunți disponibilitatea în momentul înregistrării</li></CardText>
                  <CardImg top width="100%" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi" />
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="Card">
                  <CardTitle>AI UN ANIMAL DE COMPANIE? <br />Poți pleca în vacanță fără grijă</CardTitle>
                  <CardImg top width="30%" src="https://barkpost.com/wp-content/uploads/2015/05/6711945-600x412.jpg" alt="Poza cu animale" /><br />
                  <CardText><li>Toate gazdele sunt verificate de specialiștii noștri</li></CardText>
                  <CardText><li>Poți solicita informații despre animalul tău de companie</li></CardText>
                  <CardText><li>Animalul tău de companie se va simți ca acasă</li></CardText>
                  <Button color="warning" onClick={this.clientPage}>Rezervă o gazdă HAPPY PUPPY!</Button>
                </Card>
              </Col>
            </Row>
          
          <h5>CUM FUNCTIONEAZA</h5>
            <div className="col-sm-12">
              <span>1. Iti creezi cont </span>
              <span>2 Accepti cererile</span>
              <span>3 Iti iei banii</span>
            </div>
        </div>
        );
        } 
          
      }
   
export default PrimaPagina;