import Button from 'react-bootstrap/Button';
import Cards from "./Cards.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const CardsApp = (props) => {
  return (
    <>
    <body className="Fondo">
    <br></br>
    
    <h1 className='text-center'>🔥Listas de exitos🔥</h1>
    <div className='Contenedor'>
      <Card style={{ width: '23rem',textAlign:'center', backgroundColor: '#FFD863' }}>
        <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" src={props.img} />
        <Card.Body>
          <h3>{props.titulo}</h3>
          <Card.Text>
           {props.texto}
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '23rem',textAlign:'center', backgroundColor: '#FFD863' }}>
        <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" src={props.img2} />
        <Card.Body>
          <h3>{props.titulo2}</h3>
          <Card.Text>
          {props.texto2}
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '23rem',textAlign:'center', backgroundColor: '#FFD863' }}>
        <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" src={props.img3} />
        <Card.Body>
          <h3>{props.titulo3}</h3>
          <Card.Text>
          {props.texto3}
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    </body>
    </>
  );
}

export default CardsApp;