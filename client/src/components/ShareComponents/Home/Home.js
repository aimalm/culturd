import React from "react";
import mainImage from "../image/test2.png";
import "./Home.css";
import { Button } from "react-bootstrap";
import workshop from "../image/workshop.png";
// import foodie from "../image/foodie.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container-homeMain">
        <img className="image-logo" src={mainImage} alt="Logo" />
        <div className="text-homeMain">
          <h4 className="h4-homeMain">
            Lorem ipsum dolor sit amet.Aenean commodo ligula eget dolor. Aenean
            massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies necLorem ipsum
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis Donec quam felis,.
          </h4>
          <br></br>
          <Link to="/aboutus">
<<<<<<< HEAD
                <Button>
                  Discover now
                </Button>
              </Link>
         </div>
         <div className="container-productMain">
            <h1 className="text-h1Main">OUR PRODUCT</h1>
            <div className="cards-prouductsMain">
             <div className="workshop-page">
                 <div className="workshop-image">
                     <img src={workshop} alt="workshop" />
                </div>
                     <h1>CULTURD WORKSHOP</h1>
                    <p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </p>
                     <Link to="/workshop">
                        <Button>
                      Discover now
                         </Button>
                     </Link>
                </div>
                <div className="foodie-page">
                    <div className="foodie-image">
                       <img src={foodie} alt="foodie" />
                     </div>
                     <h1>CULTURD FOODIE</h1>
                    <p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </p>
                     <Link to="/food">
                        <Button>
                            Discover now
                         </Button>
                    </Link>
                 </div>
            </div>
=======
            <Button>
              <span>Discover now</span>
            </Button>
          </Link>
>>>>>>> origin/main
        </div>
        <div className="home-section-wrapper">
        <div className="home-section-container">
        <div className="home-section-title">
           <h2>Our Products</h2>
           <div className="home-breakline"></div>

          </div>
          <div className="home-section">
            <img src={workshop} alt="workshop" />
            <h5>
              Experience difficult cultures with the guidance of the native
            </h5>
            <Link className="home-section-button" to="/workshop">More Info</Link>{" "}
          </div>
          <div className="home-section">
            <img src="https://images.unsplash.com/photo-1570604127008-f644337cfb8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="food" />
            <h5>
              To get some home food instead of boring delivery for your dinner tonight?
            </h5>
            <Link className="home-section-button" to="/food">More Info</Link>{" "}
          </div>
        </div>
        </div>
 
      </div>
    </>
  );
}

export default Home;
