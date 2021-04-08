
import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import image1 from "../image/artW.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/cookW.jpg";
import image4 from "../image/cook2.jpg";



function CarouselW() {
    return (
        <div>
          <div className="carousel">
             <Carousel slide={false} fade={false} interval={1500}>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image4} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
        </div>
    </div>
    )

}

           



   
   
export default CarouselW
