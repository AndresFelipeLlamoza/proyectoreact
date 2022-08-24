import './App.css';
import Navbar from "./components/Navbar/NavbarApp";
import CarouselFadeExample from './components/Slider/SliderApp';
import Cards from './components/Cards/CardsApp';
import FooterApp from './components/Footer/FooterApp';
import Video from './components/Video/video';

function Home() {
  
  return (
      <div className='Navbar'>
      <Navbar/>
      <CarouselFadeExample/>
      <Video/>
      <Cards/>
      <FooterApp/>
      </div>
    );
}

export default Home;

