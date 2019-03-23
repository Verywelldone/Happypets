import React from  "react";
import { Button } from 'reactstrap';
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
                <div className="col-sm-5"><img className="image-nice-dog" src={require("../Images/Common-dog-behaviors-explained.jpg")} alt="Poza cu animale" /><br />
                <Button className="under-image" onClick={this.hostPage}>Înscrie-te și găzduiește</Button>
                </div>
                <div className="col-sm-7">
                  <div className="label-container"><span>Îți stabilești singur programul de lucru</span></div>
                  <div className="label-container-right"><span>Îți anunți disponibilitatea în momentul înregistrării</span></div>
                  <div className="label-container"><span>Câștigi bani cu ușurință</span></div>
                  <div className="label-container-right"><span>Tu îți alegi animalul de companie pe care să îl găzduiești</span></div>
                </div>
              </div>
          </div>
          <div className="second-part">
            <h2 className="line-title">ESTE SIGUR SĂ ÎMI LAS ANIMALUL DE COMPANIE ÎN GRIJA UNEI PERSOANE STRĂINE?</h2>
            <div className="div-text"><i className="fas fa-check fa-2x"></i>Toate gazdele sunt verificate de specialiștii noștri</div>
            <div className="div-text"><i className="fas fa-info-circle fa-2x"></i>În orice moment poți solicita informații despre animalul tău de companie</div>
            <div className="div-text"><i className="fas fa-house-damage fa-2x"></i>Animalul tău de companie se va simți ca acasă </div>
          </div>
          <Button color="danger" onClick={this.clientPage}>Rezervă o gazdă HAPPY PUPPY!</Button>
          <h3 className="third-line">Suntem oamenii care avem grijă de animalele voastre ca și când ar fi ale noastre</h3>
          <div className="row schema-div">
            <div className="col-md-4"><i className="fas fa-search-location fa-4x"></i></div>
            <div className="col-md-4"><i className="fas fa-laptop fa-4x"></i></div>
            <div className="col-md-4"><i className="fas fa-shield-alt fa-4x"></i></div>
          </div>
          <div className="row text-schema-div">
          <div className="col-md-4"><strong>Caută<br /></strong>Citește recenziile și alege gazda perfectă</div>
            <div className="col-md-4"><strong>Rezervă<br /></strong>Rezervă în siguranță prin intermediul aplicației</div>
            <div className="col-md-4"><strong>Relaxează-te<br /></strong>Îți oferim suport 24/7, garanție și securitate</div>
          </div>



          <hr className="second-horizontal" /> 
          <footer id="first-footer">
            <ul className="footer-ul">
              <li>Despre noi</li>
              <li>Întrebări frecvente</li>
              <li>Contact</li>
            </ul>
            <ul className="footer-ul">
              <li><strong>Contactează-ne:</strong></li>
              <li>Adresa: str. Hărmanului nr 13</li>
              <li>Brașov, România</li>
            </ul>
            <ul className="footer-ul">
              <li><i className="fab fa-facebook-square fa-2x"></i></li>
            </ul>
            <ul className="footer-ul">
              <li><i className="fas fa-envelope"></i> happy@puppy.com</li>
              <li><i className="fas fa-phone"></i> 004 0740147852</li>
            </ul>
          </footer>
        </>
        );
        } 
          
      }
   
export default PrimaPagina;