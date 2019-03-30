import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'reactstrap'


const Thanks = (props) => {
    return (
      <div>
        <Jumbotron>
          <h4 className="display-3">Înregistrare confirmată!</h4>
          <p className="lead">Bine ai venit în comunitatea HAPPY PUPPY</p>
          <hr className="my-2" />
          <p>Vei fi contactat telefonic pentru a stabili detaliile.</p>
          <p className="lead">
            <Link to="/PrimaPagina">Pagina Home</Link>
          </p>
        </Jumbotron>
      </div>
    );
  };
  
  export default Thanks;