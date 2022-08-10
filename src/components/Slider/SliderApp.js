import Carousel from 'react-bootstrap/Carousel';
import Slider from './Slider.css';
import slide1 from "../img.jsx";
import slide2 from "../img.jsx";
import slide3 from "../img.jsx";

function CarouselFadeExample() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
          height="600"
          width="500"
        />
        <Carousel.Caption>
          <h3 class="fs-1"></h3>
          <p class="fs-5"></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
          height="600"
          width="500"
        />

        <Carousel.Caption>
          <h3 class="fs-1"></h3>
          <p class="fs-5"></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
          height="600"
          width="500"
        />

        <Carousel.Caption>
          <h3 class="fs-1 text-dark"></h3>
          <p class="fs-5 text-dark">
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;