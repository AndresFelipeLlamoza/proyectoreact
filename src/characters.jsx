import React, { useEffect } from 'react';
import NavbarApp from './components/Navbar/NavbarApp';
import FooterApp from './components/Footer/FooterApp';
import {PersonaApi} from './components/api/Personaje';

function Characters() {
  
    return (
        <div className='Navbar'>
        <NavbarApp/>
        <PersonaApi/>
        <FooterApp/>
        </div>
      );
  }

  export default Characters;