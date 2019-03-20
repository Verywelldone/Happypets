import React, {Component} from "react"
import "./main-page.css";
import { Button } from 'reactstrap';
import Axios from "axios"


  class firstPage extends Component {

    constructor(){
      super();
      this.hostPage = this.hostPage.bind(this);
      this.clientPage = this.clientPage.bind(this);
  }

  hostPage(){
    Axios.get("http://localhost:3001/currentSession").then((response) => {
      if(response.data.name !== "" && response.data.email !== ""){
        console.log(response.data.name + response.data.email)
        const path ="/hostPage";
        this.props.history.push(path)
      } 
      else{
        const path ="/Login";
        this.props.history.push(path)
      }
  })
  }

  clientPage(){

    Axios.get("http://localhost:3001/currentSession").then((response) => {
        if(response.data.name !== "" && response.data.email !== ""){
          console.log(response.data.name + response.data.email)
          const path ="/clientPage";
          this.props.history.push(path)
        } 
        else{
          const path ="/Login";
          this.props.history.push(path)
        }
    })
  ;  
}

    render(){
        return (
          <div id="maindiv"> 
            <header className="App-header"><img src="https://www.healthy-pets.co.uk/image/image_site/home-dog-running.jpg" alt="pets" className="dog-runing" /></header>
            <h1 className="firsth">#HAPPY PUPPY</h1>
            <h4 className="hasfour">~ Alătură-te prietenilor necuvântători ~</h4>
            <hr className="new-horizontal"/>
            <div className="row">
              <div className="col-sm-6">
                <img src="https://askgramps.org/files/2016/08/pets1.jpg" alt="pets" className="petsimg" />
              </div> 
              <div className="col-sm-6">
                <h3 className="hastree">Știați că...?</h3>
                <ul>
                  <li>Animalele de companie pot ușura singurătatea, reduce stresul, încuraja interacțiunea socială, exercițiile fizice și joaca </li>
                  <li>Pot oferi iubire necondiționată și afecțiune</li>
                  <li>Grija pentru animalele de companie poate chiar să ne prelungească viața</li>
                  <li>Ne pot îmbunătăți starea de spirit și sănătatea</li>
                </ul>
                <Button className="buton-host" color="success" onClick={this.hostPage}>Înscrie-te acum și găzduiește un animal de companie</Button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h3 className="hastree-secondrow">Nu îl putem lăsa singur acasă, nu-i așa?</h3>
                <ul>
                <li>Orice animal de companie are nevoie de atenție, dorește să se joace sau să alerge</li>
                <li>Prietenul tău necuvântător are nevoie de cineva care să îl îngrijească și să îl hrănească și atunci când ești la serviciu sau în oraș cu prietenii</li>
                <li>Ce faci atunci când vrei să pleci in vacanță și nu poți călători cu animalul tău de companie?</li>
                <li>Câți dintre prietenii tăi ar putea să îl găzduiască în tot acest timp?</li>
                </ul>
                <Button className="buton-client" color="danger" onClick={this.clientPage}>Caută o gazdă pentru animalul tău de companie</Button>
              </div>
              <div className="col-sm-6">
                <img src="https://www.dogster.com/wp-content/uploads/2017/10/A-beagle-looking-sick-or-tired.jpg" alt="pets" className="petsimg" />
              </div>
            </div>
            <hr className="second-horizontal" /> 
            <footer id="first-footer">
              <ul className="footer-ul">
                <li>Despre noi</li>
                <li>Întrebări frecvente</li>
                <li>Contact</li>
              </ul>
              <ul className="footer-ul">
                <li>Contactează-ne:</li>
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
          </div>
          
          
          );
    }
}

export default firstPage