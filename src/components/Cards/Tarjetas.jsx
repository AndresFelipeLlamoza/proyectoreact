import React from 'react'

const Tarjeta = ({sujeto}) =>{
    return(
        <fragment>
            <h1>Tarjeta</h1>
            <hr/>
            <div className="media">
                <img src={sujeto.urlImagen} alt="" srcset="" className="mr-3"/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </fragment>
    );
}

export default Tarjeta;