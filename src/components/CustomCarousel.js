import { Carousel } from "react-bootstrap";
import pic1 from "../assets/foto1.jpg";
import pic2 from "../assets/foto2.jpg";
import pic3 from "../assets/foto3.jpg";

export default function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item className="fade-carousel">
        <img className="d-block w-100 "
        src={pic1}
        alt="Primer slide" />
        <Carousel.Caption>
          <h3>Primer slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100"
        src={pic2}
        alt="segundo slide" />
        <Carousel.Caption>
          <h3>Segundo slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100"
        src={pic3}
        alt="tercer slide" />
        <Carousel.Caption>
          <h3>Tercer slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}