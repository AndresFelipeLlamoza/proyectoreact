import React, { useEffect } from 'react';
import NavbarApp from './components/Navbar/NavbarApp';
import FooterApp from './components/Footer/FooterApp';
import {PersonaApi} from './components/api/Personaje';
import './components/api/apis.css'
function Characters() {
  
    return (
        <div className='Navbar'>
        <NavbarApp/>
        <center>
            <h1 className="Tpersonajes">Listado de personajes</h1>
        </center>
        <div className='personajescont'>
            <PersonaApi/>
        </div>
        <FooterApp/>
        </div>
      );
  }

  export default Characters;