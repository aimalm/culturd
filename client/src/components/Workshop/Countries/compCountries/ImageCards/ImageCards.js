import React from 'react';
import './ImageCards.css';

function ImageCards(imageProps) {
    return (
        <div>
            <div className="imageCards">
                <div className="imageCard">
                    <div className="image">
                        <img className="image_img" src={imageProps.imageSrc} alt="Food"/>
                        <div className="image_overlay">
                            <p className="workshop_description">{imageProps.foodDes_1}</p>
                        </div>
                    </div>
                    <div className="workshop-title">
                        <p>{imageProps.foodTit_1}</p>
                    </div>
                </div>
                <div className="imageCard">
                    <div className="image">
                        <img className="image_img" src={imageProps.imageSrc} alt="Food"/>
                        <div className="image_overlay">
                            <p className="workshop_description">{imageProps.foodDes_2}</p>
                        </div>
                    </div>
                    <div className="workshop-title">
                        <p>{imageProps.foodTit_2}</p>
                    </div>
                </div>
                <div className="imageCard">
                    <div className="image">
                        <img className="image_img" src={imageProps.imageSrc} alt="Food"/>
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
