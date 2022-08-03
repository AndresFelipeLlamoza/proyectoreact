import React, { Fragment } from 'react'


const Ejemplo = (props) =>{
    return ( 
        <fragment>
            <h2>El propietario de este documento es {props.persona}</h2>
            <img src={props.img} alt="" srcset="" />
        </fragment>
     );
}

export default Ejemplo;