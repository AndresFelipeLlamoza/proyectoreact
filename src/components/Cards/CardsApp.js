import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Cod from "./cod.jpg";
import Rdr2 from "./rdr2.jpg";
import Elden from "./elden.jpg";
import Terraria from "./terraria.jpg";
import Lastofus from "./lastofus.jpg";
import Gtav from "./gtav.jpg";

function CardsApp() {
  return (
    <>
    <h1 className='text-center'>🔥Listas de exitos🔥</h1>
    <Row xs={3} md={2} className="g-1">
    <Card className='d-flex'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cod} />
      <Card.Body>
        <Card.Title>Call of duty Warzone</Card.Title>
        <Card.Text>
          una de las ultimas entregas de franquicia de call of duty, enfrentate en un mapa contra otros jugadores y logra ser ultimo en pie para ganar 
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

    <Card ClassName='d-flex'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Elden} />
      <Card.Body>
        <Card.Title>Call of duty Warzone</Card.Title>
        <Card.Text>
          una de las ultimas entregas de franquicia de call of duty, enfrentate en un mapa contra otros jugadores y logra ser ultimo en pie para ganar 
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    
    <Card ClassName='d-flex'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Gtav} />
      <Card.Body>
        <Card.Title>Call of duty Warzone</Card.Title>
        <Card.Text>
          una de las ultimas entregas de franquicia de call of duty, enfrentate en un mapa contra otros jugadores y logra ser ultimo en pie para ganar 
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

    <Card ClassName='d-flex'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Lastofus} />
      <Card.Body>
        <Card.Title>Call of duty Warzone</Card.Title>
        <Card.Text>
          una de las ultimas entregas de franquicia de call of duty, enfrentate en un mapa contra otros jugadores y logra ser ultimo en pie para ganar 
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    
    <Card ClassName='d-flex'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Rdr2} />
      <Card.Body>
        <Card.Title>Call of duty Warzone</Card.Title>
        <Card.Text>
          una de las ultimas entregas de franquicia de call of duty, enfrentate en un mapa contra otros jugadores y logra ser ultimo en pie para ganar 
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    
    <Card ClassName='d-flex'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Terraria} />
      <Card.Body>
        <Card.Title>Call of duty Warzone</Card.Title>
        <Card.Text>
          una de las ultimas entregas de franquicia de call of duty, enfrentate en un mapa contra otros jugadores y logra ser ultimo en pie para ganar 
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    </Row>
    </>
  );
}

export default CardsApp;