import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/esm/Button';
import NavbarApp from '../Navbar/NavbarApp';
import FooterApp from '../Footer/FooterApp';
import './detalleperson.css'


function DetallePersona() {

    //console.log(useParams());
    const {name} = useParams();  
    console.log(name) 
    return (  
        <>
        
        <NavbarApp />
        <div className="container-detalle">
            <button className='botonatras' onClick={()=>window.history.back(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <br></br>
            <h1 className="text-light"></h1>
        </div>
        <FooterApp />
        </>
    );
}

export default DetallePersona;