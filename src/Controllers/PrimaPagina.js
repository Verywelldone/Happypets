import React, {Component} from "react"
import "./main-page.css";
import { Button } from 'reactstrap';

  class firstPage extends Component {

    constructor(){
      super();
      this.hostPage = this.hostPage.bind(this);
  }

  hostPage(){
      const path ="/hostPage";
      this.props.history.push(path);  
  }
    render(){
        return (
          <div id="maindiv"> 
            <img src="https://www.healthy-pets.co.uk/image/image_site/home-dog-running.jpg" alt="pets" />
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
                <Button className="buton-host" color="success" onClick={this.hostPage}>Înscrie-te acum</Button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h3 className="hastree">Ce facem când nu putem călători cu animalul nostru de companie?</h3>
              </div>
              <div className="col-sm-6">
                <img src="https://www.dogster.com/wp-content/uploads/2017/10/A-beagle-looking-sick-or-tired.jpg" alt="pets" className="petsimg" />
              </div>
            </div>
          
          
          
          
          
          
          
          
          
          
          </div>
          
          
          );
    }
}

export default firstPage