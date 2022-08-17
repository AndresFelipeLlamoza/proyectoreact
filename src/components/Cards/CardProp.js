import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './Cards.css'

const tarjeta = (props) => {
    return ( 
        <div className="Fondo">
        <div className="contenedor" style={{display: 'grid', gridTemplateColumns: '20% 20% 20%'}}>
          <Card className="tarjeta-container" style={{backgroundColor: '#ffbf00'}}>
            <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" src={props.img} />
            <Card.Body>
              <h3>{props.titulo}</h3>
              <Card.Text>
              {props.texto}
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
     );
}
 
export default tarjeta;