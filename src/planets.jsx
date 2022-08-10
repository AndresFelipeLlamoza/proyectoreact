import React, { useEffect } from 'react';
import NavbarApp from './components/Navbar/NavbarApp';
import FooterApp from './components/Footer/FooterApp';


function Characters() {
  
    return (
        <div className='Navbar'>
        <NavbarApp/>
        <h1>Planetas</h1>
        <FooterApp/>
        </div>
      );
  }

  export default Characters;