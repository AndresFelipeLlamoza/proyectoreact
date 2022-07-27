import './App.css';
import Navbar from "./components/Navbar/NavbarApp";
import CarouselFadeExample from './components/Slider/SliderApp';
import Cards from './components/Cards/CardsApp'
import FooterApp from './components/Footer/FooterApp'

function App() {
  return (
      <div className='Navbar'>
      <Navbar/>
      <CarouselFadeExample/>
      <Cards/>
      <FooterApp/>
      </div>
    );
}

export default App;

