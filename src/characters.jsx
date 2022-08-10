import React, { useEffect } from 'react';
import NavbarApp from './components/Navbar/NavbarApp';
import FooterApp from './components/Footer/FooterApp';
import {usePerson} from './hooks/useperson';

export const Person = usePerson => {
    const{getAllPerson} = usePerson
    useEffect(() => {
        getAllPerson();
        console.log(getAllPerson());
    }, []);
}

function Characters() {
  
    return (
        <div className='Navbar'>
        <NavbarApp/>
        <h1>Personajes</h1>
        <FooterApp/>
        </div>
      );
  }

  export default Characters;