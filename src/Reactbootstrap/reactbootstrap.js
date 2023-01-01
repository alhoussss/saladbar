import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <center><img
          className="d-block w-100 p-1 h-50 d-inline-block "
          src="https://images6.alphacoders.com/450/450480.jpg"
          alt="First slide"
        /></center>
        <Carousel.Caption>
          <h3>Salade de concombre au chèvre et olives</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <center><img
          className="d-block w-100 p-1 h-50 d-inline-block"
          src="https://images7.alphacoders.com/803/thumb-1920-803247.jpg"
          alt="Second slide"
        /></center>

        <Carousel.Caption>
          <h3>Salade Cobb au poulet</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <center><img
          className="d-block w-100 p-1 h-50 d-inline-block"
          src="https://images7.alphacoders.com/436/436204.jpg"
          alt="Third slide"
        /></center>

        <Carousel.Caption>
          <h3>Salade de légumes grillés</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;