import NavbarApp from './components/Navbar/NavbarApp';
import FooterApp from './components/Footer/FooterApp';
import {PersonaApi} from './components/api/Personaje';
import './components/api/apis.css';
import React, { useEffect } from 'react';
import { UsePerson } from './hooks/useperson';
import { Link } from 'react-router-dom';

const Person = () => {
    const { getAllPerson, dataPerson, Contador, disminuir, aumentar } =
      UsePerson();
    useEffect(() => {
      getAllPerson(Contador);
  
      console.log(dataPerson);
    }, [dataPerson]);


    return (
        <div>
        <NavbarApp/>
        <center>
            <h1 className="Tpersonajes">Listado de personajes</h1>
        </center>
          <div className='Cpersonaje'>
            {dataPerson.map((personas) => (
              <PersonaApi
                  key={personas.name}
                  nombre={personas.name}
                  altura={personas.height}
                  peso={personas.mass}
                  pelo={personas.hair_color}
                  piel={personas.skin_color}
                  ojos={personas.eye_color}
                  nacimiento={personas.birth_year}
                  genero={personas.gender}
                  hogar={personas.homeworld}
                />
                
            ))}
          </div>
          <div className="container d-flex justify-content-center align-items-center">
            <button className="botonPag" onClick={disminuir}>
              Anterior
            </button>
            <b
              style={{
                marginLeft: "12px",
                marginRight: "12px",
                fontSize: "larger",
                color: "black",
                textShadow: "0 0 4px #FFE919",
              }}
            >
              {Contador}
            </b>
            <button className="botonPag" onClick={aumentar}>
              Siguiente
             
            </button>
          </div><br/>
          <FooterApp/>
        </div>
      );
    };
   
export default Person;
