import React from  "react";
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import "./first-page-style.css";

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
          <div id="">
            <Row>
              <Col sm="6">
                <Card body className="Cards">
                  <CardTitle className="title">GĂZDUIEȘTE!</CardTitle>
                  <Button color="danger" onClick={this.hostPage}>Înscrie-te acum</Button><br />
                  <CardText><li>Îți stabilești singur programul de lucru</li></CardText>
                  <CardText><li>Tu alegi talia animalului pe care îl găzduiești</li></CardText>
                  <CardText><li>Câștigi bani cu ușurință</li></CardText>
                  <CardText><li>Îți anunți disponibilitatea în momentul înregistrării</li></CardText>
                  <CardImg top width="100%" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi" /> <br/>
                  <CardText><li>Daca esti un iubitor de animale, nu mai astepta, fa primul pas si inregistreaza-te in aplicatie</li></CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="Cards">
                  <CardTitle className="title">AI UN ANIMAL DE COMPANIE? <br />Poți pleca în vacanță fără grijă</CardTitle>
                  <CardImg top width="100%" src="https://barkpost.com/wp-content/uploads/2015/05/6711945-600x412.jpg" alt="Poza cu animale" /><br />
                  <CardText><li>Toate gazdele sunt verificate de specialiștii noștri</li></CardText>
                  <CardText><li>În orice moment poți solicita informații despre animalul tău</li></CardText>
                  <CardText><li>Animalul tău de companie se va simți ca acasă</li></CardText>
                  <Button color="danger" onClick={this.clientPage}>Rezervă o gazdă HAPPY PUPPY!</Button>
                </Card>
              </Col>
            </Row>
          
          <h5 className="info">CUM FUNCȚIONEAZĂ</h5>
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