import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icono from "../img.jsx";
import Logo from "./logo.css";
import {Link} from 'react-router-dom';
import img from '../img.jsx';
import './NavbarApp.css';


function NavbarApp() {
  return (
    <Navbar  style={{backgroundColor: "#051336"}} collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand  href="#home"><img src={img.icono} class="logo"></img>The Star Wars Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="navbar">
            <Nav.Link><Link className="texto-nav"to='/'>Inicio</Link></Nav.Link>
            <Nav.Link><Link  className="texto-nav" to='/characters'>Personajes</Link></Nav.Link>
            <Nav.Link><Link className="texto-nav" to='/planets'>Planetas</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;