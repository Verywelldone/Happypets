import React from  "react";
import { Card, Button, CardBody, CardText, Row, Col, CardImg } from 'reactstrap';
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
        const path ="/clientPage";
        this.props.history.push(path);  
    }

    render() {
        return (
        <>
          <div className="first-page-container">
              <h1 className="line-title">DE CE SĂ TE ÎNREGISTREZI ÎN APLICAȚIA HAPPY PUPPY?</h1>
              <p className="head-paragraph">Pe lânga <strong>atuurile</strong> pe care ți le aduce aplicația noastră,<br /> iată câteva dintre cele mai importante beneficii ale tale</p>
              <div className="row">
                <div className="col-sm-5"><img className="image-nice-dog" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi" alt="Poza cu animale" /><br />
                <Button className="under-image" onClick={this.hostPage}>Înscrie-te și găzduiește</Button>
                </div>
                <div className="col-sm-7">
                  <div className="label-container"><span>Iti stabilesti singur programul de lucru</span></div>
                  <div className="label-container-right"><span>Iti anunti disponibilitatea in momentul inregistrarii</span></div>
                  <div className="label-container"><span>Castigi bani cu usurinta</span></div>
                  <div className="label-container-right"><span>Tu iti alegi animalul de companie pe care sa il gazduiesti</span></div>
                </div>
              </div>
          </div>
          <div className="second-part">
            <h2 className="line-title">ESTE SIGUR SĂ ÎMI LAS ANIMALUL DE COMPANIE ÎN GRIJA UNEI PERSOANE STRĂINE?</h2>
            <div className="div-text">Toate gazdele sunt verificate de specialiștii noștri</div>
            <div className="div-text">În orice moment poți solicita informații despre animalul tău de companie</div>
            
          </div>
        </>
        );
        } 
          
      }
   
export default PrimaPagina;