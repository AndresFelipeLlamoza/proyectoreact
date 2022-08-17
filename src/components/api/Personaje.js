import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import apis from './apis.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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
    <div className="contenedor-persona">
        <div className="Fondo">
        <div className="contenedor" style={{display: 'grid', gridTemplateColumns: '20% 20% 20%'}}>
          <Card className="tarjeta-container" style={{backgroundColor: '#ffbf00'}}>
            <Card.Img style={{borderRadius: '0px 50px 0px 50px', marginTop: '38px'}} variant="top" />
            <Card.Body>
              <h3>{ Personas.name }</h3>
              <Card.Text>
              {Personas.map(Personas=>(
                    <div key={setPersonas}>
                    <p>{ Personas.heigth}</p>
                    <p>{ Personas.mass}</p>
                    <p>{ Personas.hair_color}</p>
                    <p>{ Personas.skin_color}</p>
                    <p>{ Personas.eye_color}</p>
                    <p>{ Personas.birth_year}</p>
                    <p>{ Personas.gender}</p>
                    </div>
                ))}
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
