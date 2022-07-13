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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;