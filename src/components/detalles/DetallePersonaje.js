import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/esm/Button';
import NavbarApp from '../Navbar/NavbarApp';
import FooterApp from '../Footer/FooterApp';
import { Card } from 'react-bootstrap';
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
            <div className="tarjetaContainer">
            <Card style={{width:'20rem', borderRadius: '25px 0px 0px 25px'}} className="detallecard">
                <br></br>
                <h2>{personaje.name}</h2>
                <br></br>
                <h5>Altura:</h5>
                <p>{personaje.height}</p>
                <h5>Peso:</h5>
                <p>{personaje.mass}</p>
                <h5>Color de pelo:</h5>
                <p>{personaje.hair_color}</p>
                <h5>Color de piel:</h5>
                <p>{personaje.skin_color}</p>
                <h5>Color de ojos:</h5>
                <p>{personaje.eye_color}</p>
                <h5>Año de nacimiento:</h5>
                <p>{personaje.birth_year}</p>
                <h5>Genero:</h5>
                <p>{personaje.gender}</p>
            </Card>
            <Card className='imagensti'>
                <img style={{width: '50rem', borderRadius: '0px 25px 25px 0px'}} src={'https://th.bing.com/th/id/R.a732bfaf0750d80ca45d67af28f39b00?rik=ZQruAmPhTKSLbg&pid=ImgRaw&r=0'}></img>
            </Card>
            <br></br>
            <br></br>
            </div>
        </div>
        <FooterApp />
        
        </>
    );
}

export default DetallePersona;