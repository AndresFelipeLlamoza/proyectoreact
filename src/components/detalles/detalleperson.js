import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/esm/Button';
import NavbarApp from '../Navbar/NavbarApp';
import {PersonaApi} from '../api/Personaje';
import FooterApp from '../Footer/FooterApp';
import './detalleperson.css'


const DetallePerson = () => {
    const [datos, setDatos] = React.useState([])
    React.useEffect(() => {
    obtenerDatos()
}, [])


const obtenerDatos = async () => {
    const data = await fetch ('https://swapi.dev/api/people/')
    const person = await data.json()
    setDatos(person.people)
}
    return (  
        <>
        <NavbarApp />

        <div className="container-detalle">
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            <button className='botonatras' onClick={()=>window.history.back(-1)}>Volver a listado de personajes</button>
            <br></br>
       
        </div>

        <FooterApp />
        </>
    );
}

export default DetallePerson;