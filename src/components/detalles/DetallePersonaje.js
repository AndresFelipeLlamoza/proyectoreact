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
                <img className="imagenPersonaje" style={{height: '30rem',width: '30rem', borderRadius: '25px 0px 0px 25px'}} src={'https://th.bing.com/th/id/R.a732bfaf0750d80ca45d67af28f39b00?rik=ZQruAmPhTKSLbg&pid=ImgRaw&r=0'}></img>
            
            <Card style={{width:'20rem', borderRadius: '0px 25px 25px 0px', backgroundColor: '#f4d061'}} className="detallecard">
                <br></br>
                <h2>{personaje.name}</h2>
                <br></br>
                <p><span style={{fontWeight:'bold', fontSize: '20px'}}>Altura:</span>{personaje.height}Cm</p>
                <p><span style={{fontWeight:'bold', fontSize: '20px'}}>Peso:</span>{personaje.mass}Kg</p>
                <p><span style={{fontWeight:'bold', fontSize: '20px'}}>Color de pelo:</span>{personaje.hair_color}</p>
                <p><span style={{fontWeight:'bold', fontSize: '20px'}}>Color de piel:</span>{personaje.skin_color}</p>
                <p><span style={{fontWeight:'bold', fontSize: '20px'}}>Color de ojos:</span>{personaje.eye_color}</p>
                <p><span style={{fontWeight:'bold', fontSize: '20px'}}>Año de nacimiento:</span>{personaje.birth_year}</p>
                <p><span style={{fontWeight:'bold', fontSize: '20px'}}>Genero:</span>{personaje.gender}</p>
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