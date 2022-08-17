import React, { useEffect, useState } from 'react'
import apis from './apis.css'

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
    <div className="contenedor-planeta">
        {Planetas.map(Planetas=>(
            <div key={setPlanetas}>
                <p>{ Planetas.name }</p>
                <p>{ Planetas.rotation_period}</p>
                <p>{ Planetas.orbital_period}</p>
                <p>{ Planetas.diameter}</p>
                <p>{ Planetas.climate}</p>
                <p>{ Planetas.gravity}</p>
                <p>{ Planetas.terrain}</p>
                <p>{ Planetas.population}</p>
                <p>{ Planetas.terrain}</p>
            </div>
        ))}
    </div>
  )
}
