import './App.css';
import Navbar from "./components/Navbar/NavbarApp";
import CarouselFadeExample from './components/Slider/SliderApp';
import Cards from './components/Cards/CardsApp';
import FooterApp from './components/Footer/FooterApp';
import Ejemplo from './components/Cards/Props';
import Tarjeta from './components/Cards/Tarjetas';
import Cod from './components/Cards/cod.jpg';
import Rdr2 from "./components/Cards/rdr2.jpg";
import Elden from "./components/Cards/elden.jpg";
import Terraria from "./components/Cards/terraria.jpg";
import Lastofus from "./components/Cards/lastofus.jpg";
import Gtav from "./components/Cards/gtav.jpg";
import Video from './components/Video/video';

function App() {
  const sujeto = {
    nombre: 'Camilo',
    urlImagen: 'https://via.placeholder.com/100',
    texto: 'hola soy camilo, desarrollador de software'
  }
  
  return (
      <div className='Navbar'>
      <Navbar/>
      <CarouselFadeExample/>
      <Video/>
      <Cards 
        titulo="Call of duty: Warzone" img={Cod} texto="Videojuegos de disparos en primera persona, la ultima entrega de activision y la mas popular hasta el momento"
        titulo2="Red dead redemption 2" img2={Rdr2} texto2="Un mundo abierto, durante tiempos del viejo oeste, un modo historia con mucho que ofrecer y mecanicas muy realistas, una joya de rockstar"
        titulo3="Elden Ring " img3={Elden} texto3="Aceptas el reto? este videojuego es considerado como uno de los mas dificiles en cuanto a jugabilidad y enemigos"
        titulo4="Terraria" img4={Terraria} texto4="Explora, crea y diviertete en un mapa lleno de tesoros y misterios que esperan ser descubiertos"
        titulo5="The last of us" img5={Lastofus} texto5="Posee un nivel de realismo muy alto, sobrevive en un mundo post-apocaliptico para descubrir el origen de toda la catastrofe  "
        titulo6="Grand Theft Auto V" img6={Gtav} texto6="Muy querido por los gamers, no hace falta decir mas, una joya de la decada" />
      <FooterApp/>
      </div>
    );
}

export default App;

