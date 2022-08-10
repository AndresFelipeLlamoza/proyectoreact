import '../App.css';
import Navbar from "../components/Navbar/NavbarApp";
import CarouselFadeExample from '../components/Slider/SliderApp';
import Cards from '../components/Cards/CardsApp';
import FooterApp from '../components/Footer/FooterApp';
import card1 from "../components/img.jsx";
import card2 from "../components/img.jsx";
import card3 from "../components/img.jsx";
import Video from '../components/Video/video';

function App() {
  
  return (
      <div className='Navbar'>
      <Navbar/>
      <CarouselFadeExample/>
      <Video/>
      <Cards 
        titulo="Informacion y mucho mas!" img={card1} texto="Informacion sobre la saga completa aqui y ahora"
        titulo2="Bienvenido" img2={card2} texto2="Embarcate en el universo de star wars mediante nuestra increible pagina"
        titulo3="El lado oscuro" img3={card3} texto3="El lado oscuro te necesita, aceptas pagar el precio ?"/>
      <FooterApp/>
      </div>
    );
}

export default App;

