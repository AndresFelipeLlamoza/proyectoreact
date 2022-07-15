import Carousel from 'react-bootstrap/Carousel';
import Slider from './Slider.css';
import Juegos1 from "./Juegos1.jpeg";
import Juegos2 from "./Juegos2.jpg";
import Juegos3 from "./Juegos3.jpg";

function CarouselFadeExample() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Juegos1}
          alt="First slide"
          height="600"
          width="500"
        />
        <Carousel.Caption>
          <h3 class="fs-1">Lo mejor en videojuegos</h3>
          <p class="fs-5">Crackeando videojuegos desde el 2022.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Juegos2}
          alt="Second slide"
          height="600"
          width="500"
        />

        <Carousel.Caption>
          <h3 class="fs-1">De todos los generos, para todo publico</h3>
          <p class="fs-5">Contamos con una amplia base de datos de torrents de juegos listos para descargarse de forma gratuita.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Juegos3}
          alt="Third slide"
          height="600"
          width="500"
        />

        <Carousel.Caption>
          <h3 class="fs-1 text-dark">Juego sin molestias</h3>
          <p class="fs-5 text-dark">
            Nosotros hacemos esto sin nigun fin de lucro, asi que puedes navegar sin necesidad de preocuparte por los anuncios
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;