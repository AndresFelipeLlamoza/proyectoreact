import React, { useEffect } from 'react';
import NavbarApp from './components/Navbar/NavbarApp';
import FooterApp from './components/Footer/FooterApp';
import {PersonaApi} from './components/api/Personaje';
import './components/api/apis.css'
function Characters() {
  
    return (
        <div className='Navbar'>
        <NavbarApp/>
        <div className='personajescont'>
            <PersonaApi/>
        </div>
        <FooterApp/>
        </div>
      );
  }

  export default Characters;