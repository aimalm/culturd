import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import burger from "../images/burger.jfif";
import door from "../images/door.jpg";
import dumplings from "../images/dumplings.jfif";
import pan from "../images/pan.jfif";
import paperbag from "../images/paperbag.jfif";
import stove from "../images/stove.jpg";

function CarouselF() {
    return (
        <div className="carousel">
             <Carousel slide={false} fade={false} interval={1500}>
          <Carousel.Item>
            <img className="d-block w-100" src={dumplings} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pan} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={door} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={burger} alt="Second slide" />

            <Carousel.Caption>
              <h3>4th slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={stove} alt="Second slide" />

            <Carousel.Caption>
              <h3>5th slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={paperbag} alt="Second slide" />

            <Carousel.Caption>
              <h3>6th slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default CarouselF
