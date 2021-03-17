import React from 'react'
import mainImage from '../image/test2.png'
import './Home.css'
import { Button } from 'react-bootstrap';
import workshop from '../image/workshop.png'
import foodie from '../image/foodie.png'
import { Link } from 'react-router-dom';



function Home() {
    return (
      <>
     <div className="container-homeMain" >
        <img className="image-logo" src={mainImage} alt="Logo" />  
       <div className="text-homeMain">
           <h4 className="h4-homeMain">Lorem ipsum dolor sit amet.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
           Donec quam felis, ultricies necLorem ipsum Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
           Donec quam felis,.</h4><br></br>
          <Link to="/aboutus">
                <Button>
                  <span>Discover now</span>
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
                        <span>Discover now</span>
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
                            <span>Discover now</span>
                         </Button>
                    </Link>
                 </div>
            </div>
        </div>
    </div>
  

    </>     
        
    )
}

export default Home
