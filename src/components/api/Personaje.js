import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './apis.css'
import { Link } from 'react-router-dom';


export const PersonaApi = ({
    nombre,
    altura,
    peso,
    pelo,
    piel,
    ojos,
    nacimiento,
    genero,
    hogar
    }) => {

  return (
    <div className='ContainerApi'>
        <div className="contenido-cp" >
            <h5>Nombre</h5>
            <p>{nombre}</p>
            <h5>Altura</h5>
            <p>{altura}</p>
            <h5>Peso</h5>
            <p>{peso}</p>
            <h5>Color de pelo</h5>
            <p>{pelo}</p>
            <h5>Color de piel</h5>
            <p>{piel}</p>
            <h5>Color de ojos</h5>
            <p>{ojos}</p>
            <h5>Año de nacimiento</h5>
            <p>{nacimiento}</p>
            <h5>Genero</h5>
            <p>{genero}</p>
            <h5>Hogar</h5>
            <p>{hogar}</p>  
            <Link to='/detalleperson'>hola</Link> 
        </div>
      </div>
    )
}
