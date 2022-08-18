import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import apis from './apis.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img from '../img'


export const PersonaApi = () => {
    const [Personas,setPersonas] = useState ([]);
    useEffect(()=> {
        async function person () {
            const Person = await fetch ('https://swapi.dev/api/people');
            const Perso = await Person.json();
            setPersonas(Perso.results);
        }
        person();
    },[])
  return (
      <div className='ContainerApi'>
          {Personas.map(Personas=>(
            
              <div className="contenido-cp" key={setPersonas}>
                
                <h5>Nombre</h5>
                <p>{Personas.name}</p>
                <h5>Altura</h5>
                <p>{ Personas.height}</p>
                <h5>Peso</h5>
                <p>{ Personas.mass}</p>
                <h5>Color de pelo</h5>
                <p>{ Personas.hair_color}</p>
                <h5>Color de piel</h5>
                <p>{ Personas.skin_color}</p>
                <h5>Color de ojos</h5>
                <p>{ Personas.eye_color}</p>
                <h5>Año de nacimiento</h5>
                <p>{ Personas.birth_year}</p>
                <h5>Genero</h5>
                <p>{ Personas.gender}</p>
              </div>
            ))}
      </div>
  )
}
