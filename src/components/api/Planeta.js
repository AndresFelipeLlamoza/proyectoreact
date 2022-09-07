import React, { useEffect, useState } from 'react'
import './apis.css'



export const PlanetasApi = ({
    planeta,
    clima,
    terreno,
    creado,
    diametro,
    gravedad,
    poblacion,
   }) => {
    return (
        <div className="container-plane">
            <div className="contenido-plane">
                <img style={{width: '200px'}} src='https://starwarsblog.starwars.com/wp-content/uploads/2022/03/inside-intel-coruscant-planet.jpg'></img>
                <h4>Nombre</h4>
                <p>{ planeta }</p>
                <h4>Clima</h4>
                <p>{ clima}</p>
                <h4>Terreno</h4>
                <p>{ terreno}</p>
                <h4>Creado</h4>
                <p>{ creado}</p>
                <h4>diametro</h4>
                <p>{ diametro}</p>
                <h4>Gravedad</h4>
                <p>{ gravedad}</p>
                <h4>Terreno</h4>
                <p>{ poblacion}</p>
            </div>
        </div>
    )
}
