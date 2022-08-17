import React, { useEffect } from 'react';
import NavbarApp from './components/Navbar/NavbarApp';
import FooterApp from './components/Footer/FooterApp';
import { PlaneApi } from './components/api/Planeta';


function Characters() {
  
    return (
        <div className='Navbar'>
        <NavbarApp/>
        <PlaneApi/>
        <FooterApp/>
        </div>
      );
  }

  export default Characters;