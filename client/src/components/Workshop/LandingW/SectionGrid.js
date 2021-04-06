import React from 'react'

function SectionGrid() {
    return (
        <div>
           <h1 className="title-home">How it works </h1>

           <div className="container-work">
          
            <button className="box-work">
            <i class="fa fa-copy fa-2x"></i>
              <h2 className="text-uppercase">Choose venue</h2>
              <p>A wide variety of activities to stimulate variety workshop, such as arts , cooking and Dancing.</p>
            </button>
            <button className="box-work">
            <i class="fa fa-users fa-2x"></i>
              <h2 className="text-uppercase">Choose menu</h2>
              <p>Our experienced Workshop encourage people to Learn about our Culture,brings togetherness and creatively.</p>
            </button>
            <button className="box-work">
            <i class="fas fa-mug-hot fa-2x"></i>
              <h2 className="text-uppercase">Fun cooking</h2>
              <p>Organic food, variety food, and alot of igredient delivered cooking together brings togetherness.</p>
            </button>
            
          
        </div>


         
        </div>
    
   
    )
}

export default SectionGrid
