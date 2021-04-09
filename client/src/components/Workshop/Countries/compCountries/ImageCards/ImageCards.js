import React from "react";
import "./ImageCards.css";

function ImageCards(imageProps) {
  return (
    <div>
      <div className="imageCards">
        <div className="imageCard card1">
          <div className="image">
            <img className="image_img" src={imageProps.imageSrc1} alt="Food" />
            <div className="image_overlay">
              <p className="workshop_description">{imageProps.foodDes_1}</p>
            </div>
          </div>
          <div className="workshop-title">
            <p>{imageProps.foodTit_1}</p>
          </div>
        </div>
        <div className="imageCard card2">
          <div className="image">
            <img className="image_img" src={imageProps.imageSrc2} alt="Food" />
            <div className="image_overlay">
              <p className="workshop_description">{imageProps.foodDes_2}</p>
            </div>
          </div>
          <div className="workshop-title">
            <p>{imageProps.foodTit_2}</p>
          </div>
        </div>
        <div className="imageCard card3">
          <div className="image">
            <img className="image_img" src={imageProps.imageSrc3} alt="Food" />
            <div className="image_overlay">
              <p className="workshop_description">{imageProps.foodDes_3}</p>
            </div>
          </div>
          <div className="workshop-title">
            <p>{imageProps.foodTit_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCards;
