import React, { useEffect, useState } from 'react'
import './apis.css'

export const PlaneApi = () => {
    const [Planetas,setPlanetas] = useState ([]);
    useEffect(()=> {
        async function plan () {
            const Planeta = await fetch ('https://swapi.dev/api/planets/');
            const Plane = await Planeta.json();
            setPlanetas(Plane.results);
        }
        plan();
    },[])
    return (
        <div className="ContainerApi">
        {Planetas.map(Planetas=>(
            <div key={setPlanetas}>
                <h4>Nombre</h4>
                <p>{ Planetas.name }</p>
                <h4>Periodo de rotacion</h4>
                <p>{ Planetas.rotation_period}</p>
                <h4>Periodo orbital</h4>
                <p>{ Planetas.orbital_period}</p>
                <h4>Diametro</h4>
                <p>{ Planetas.diameter}</p>
                <h4>Clima</h4>
                <p>{ Planetas.climate}</p>
                <h4>Gravedad</h4>
                <p>{ Planetas.gravity}</p>
                <h4>Terreno</h4>
                <p>{ Planetas.terrain}</p>
                <h4>Poblacion</h4>
                <p>{ Planetas.population}</p>
            </div>
        ))}
        </div>
    )
}
