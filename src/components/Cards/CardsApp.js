import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import img from '../img.jsx'
import CardProp from './CardProp'


const CardsInfo = [
  {
    titulo: 'Informacion y mucho mas!',
    img: img.card1,
    texto: 'Informacion sobre la saga completa aqui y ahora'
  },
  {
    
    titulo: 'Bienvenido',
    img: img.card2,
    texto: 'Embarcate en el universo de star wars mediante nuestra increible pagina'
  },
  {
    titulo: 'El lado oscuro',
    img: img.card3,
    texto: 'El lado oscuro te necesita, aceptas pagar el precio ?'
  }
]

function CardsApp () {
  return (  
    <div class="cardsG">
      {CardsInfo.map((card) => (
        <CardProp titulo={card.titulo} img={card.img} texto={card.texto}/>
     ))}
    </div>
  );
}
 
export default CardsApp;