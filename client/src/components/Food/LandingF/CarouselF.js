import React from "react";
import Carousel from "react-bootstrap/Carousel";

import burger from "../images/burger.jfif";
import door from "../images/door.jpg";
import dumplings from "../images/dumplings.jfif";
import pan from "../images/pan.jfif";
import stove from "../images/stove.jpg";

function CarouselF() {
  return (
    <div className="carousel">
      <Carousel slide={false} fade={false} interval={1500}>
        <Carousel.Item>
          <img className="d-block w-100" src={dumplings} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pan} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={door} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={burger} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={stove} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselF;
