import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/esm/Button';
import NavbarApp from '../Navbar/NavbarApp';
import FooterApp from '../Footer/FooterApp';
import './detalleperson.css'


function DetallePersona() {

    console.log(useParams());
    const {url} = useParams();  
    console.log(url) 

    const [personaje, setPersonaje] = React.useState([])

    React.useEffect(() => {
        getDataPerson()
    }, [])

    const getDataPerson = async () => {
        const data = await fetch (`https://swapi.dev/api/people/${url}`)
        const person = await data.json()
        setPersonaje(person)
    }
    return (  
        <>
        <NavbarApp />
        <div className="container-detalle">
            <button className='botonatras' onClick={()=>window.history.back(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <br></br>
            <h3>{personaje.name}</h3>
            <p>{personaje.mass}</p>
        </div>
        <FooterApp />
        
        </>
    );
}

export default DetallePersona;