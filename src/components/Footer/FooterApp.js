import React from 'react'
import footerlogo from './footerlogo.png'
function FooterApp() {
  return (
    <footer style={{padding: '25px', backgroundColor: '#051336', textAlign: 'center', color: 'white'}}>
        <p> Por Andres Felipe Llamoza Pechene | Todos los derechos reservados</p>
        <div className='footergrid' style={{display: 'grid', gridTemplateColumns:'20% 20% 20%', justifyContent: 'center'}}>
          <p>Palmira - Valle del cauca</p>
          <p>SENA - Centro de biotecnologia industrial</p>
          <p>&copy; 2022</p>
        </div>
    </footer>
  )
}

export default FooterApp