import './App.css';
import Navbar from "./components/Navbar/NavbarApp";
import CarouselFadeExample from './components/Slider/SliderApp';
import Cards from './components/Cards/CardsApp'

function App() {
  return (
      <div className='Navbar'>
      <Navbar/>
      <CarouselFadeExample/>
      <Cards/>
      </div>
    );
}

export default App;

