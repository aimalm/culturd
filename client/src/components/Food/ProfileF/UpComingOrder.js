import React from "react";
import { RiContactsBookLine } from "react-icons/ri";
import {axois} from "../../Axois/Axois"

function UpComingOrder({ orderData, dishData, userData }) {
  
  let dishName
  

    console.log("orderData in profileF:", orderData);

  let onlyProductId = orderData.map((order) => order.product_id)
  console.log(onlyProductId)

  onlyProductId.forEach(product => {
    dishData.forEach(dish => {

        if(dish.cookerId == "606b98194c437f4260c28fd7" ){
            console.log(dish)
        }
     
        
    })
  })
      


  return <div></div>;
}

export default UpComingOrder;
