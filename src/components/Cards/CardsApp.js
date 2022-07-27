import Button from 'react-bootstrap/Button';
import Cards from "./Cards.css"
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
    <body className="Fondo">
    <br></br>
    <h1 style={{color: 'white', textAlign: 'center'}}>Trailer del dia</h1>
    <br></br>
    
      <iframe style={{ marginLeft: '32%', marginBottom: '60px', marginTop: '50px'}} width="560" height="315" src="https://www.youtube.com/embed/4hr5WAA3guY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <h1 className='text-center'>🔥Listas de exitos🔥</h1>
    <div className='Contenedor'>
      <Card style={{ width: '23rem',textAlign:'center', backgroundColor: '#FFD863' }}>
        <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" src={Cod} />
        <Card.Body>
          <h3>Call of duty: Warzone</h3>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '23rem',textAlign:'center', backgroundColor: '#FFD863' }}>
        <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" src={Rdr2} />
        <Card.Body>
          <h3>Red dead redemption 2</h3>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '23rem',textAlign:'center', backgroundColor: '#FFD863' }}>
        <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px', height: '205px'}} variant="top" src={Terraria} />
        <Card.Body>
          <h3>Terraria</h3>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '23rem',textAlign:'center', backgroundColor: '#FFD863' }}>
        <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" src={Elden} />
        <Card.Body>
          <h3>Elden ring</h3>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '23rem',textAlign:'center', backgroundColor: '#FFD863' }}>
        <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" src={Lastofus} />
        <Card.Body>
          <h3>The last of us</h3>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '23rem',textAlign:'center', backgroundColor: '#FFD863' }}>
        <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" src={Gtav} />
        <Card.Body>
          <h3>Grand Theft Auto V</h3>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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