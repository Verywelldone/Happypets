import React from  "react";
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import "./first-page-style.css";
import Axios from "axios"

class PrimaPagina extends React.Component { 
    
    constructor(){
        super();
        this.hostPage = this.hostPage.bind(this);
        this.clientPage = this.clientPage.bind(this);
    }
    
    hostPage(){
        
      Axios.get("http://localhost:3001/currentSession").then((response)=>{
        if(response.data.email === "" && response.data.email === ""){

          const path ="/Login";
          this.props.history.push(path);  
        }
      })

        const path ="/hostPage";
        this.props.history.push(path);  
    }
    

    clientPage(){
      
      Axios.get("http://localhost:3001/currentSession").then((response)=>{
        if(response.data.email === "" && response.data.email === ""){

          const path ="/Login";
          this.props.history.push(path);  
        }
      })
        
    }

    render() {
        return (
<<<<<<< HEAD
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
                  {/* poza de mai jos trebuie schimbata */}
                {/*   <CardImg top width="100%" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi" alt="Poza cu animale" /> <br/> */}
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
            <hr />
          
          <h4 className="info">CUM FUNCȚIONEAZĂ</h4>
          <h6 className="hassix">Urmeaza cei trei pasi simpli</h6>
            <Card body className="smallcards">
              <CardText className="text">1. Te inregistrezi in aplicatie<br />
                Fie ca vrei sa devii o gazda pentru un animal de companie sau esti proprietarul unui animal de comapnie, primul pas este sa te inregistrezi in aplicatia Happy Puppy
              </CardText>
            </Card>
            <Card body className="smallcards">
              <CardText className="text">2. Din contul tau poti cauta o gazda daca ai un animal de companie sau poti accepta o cerere daca te-ai inregistrat ca si gazda </CardText>
            </Card>
            <Card body className="smallcards">
              <CardText className="text">3. Toata lumea e multumita </CardText>
            </Card><br />
            <footer className="footer-ul">
              <ul> 
                <li>Despre noi</li>
                <li>Contact</li>
                <li>Politica de cookie</li>
                <li>Termeni si conditii de utilizare a website-ului</li>
              </ul>
             
            </footer> 
        </div>
=======
        <>
          <div className="first-page-container">
              <h1 className="line-title">DE CE SĂ TE ÎNREGISTREZI ÎN APLICAȚIA HAPPY PUPPY?</h1>
              <p className="head-paragraph">Pe lânga <strong>atuurile</strong> pe care ți le aduce aplicația noastră,<br /> iată câteva dintre cele mai importante beneficii ale tale</p>
              <div className="row">
                <div className="col-sm-5"><img className="image-nice-dog" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi" alt="Poza cu animale" /><br />
                <Button className="under-image" onClick={this.hostPage}>Înscrie-te acum</Button>
                </div>
                <div className="col-sm-7">
                  <div className="label-container"><span>Iti stabilesti singur programul de lucru</span></div>
                  <div className="label-container-right"><span>Iti anunti disponibilitatea in momentul inregistrarii</span></div>
                  <div className="label-container"><span>Castigi bani cu usurinta</span></div>
                  <div className="label-container-right"><span>Tu iti alegi animalul de companie pe care sa il gazduiesti</span></div>
                </div>
              </div>
          </div>
        </>
>>>>>>> fb8c9e90e26c77fc12961c8784319ff2e3ba1b7c
        );
        } 
          
      }
   
export default PrimaPagina;