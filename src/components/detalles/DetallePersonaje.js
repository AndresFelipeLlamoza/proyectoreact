import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/esm/Button';
import NavbarApp from '../Navbar/NavbarApp';
import {PersonaApi} from '../api/Personaje';
import FooterApp from '../Footer/FooterApp';
import './detalleperson.css'


const DetallePersona = () => {
    return (  
        <>
        <NavbarApp />
        <div className="container-detalle">
            <button className='botonatras' onClick={()=>window.history.back(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <br></br>
            
        </div>

        <FooterApp />
        </>
    );
}

export default DetallePersona;