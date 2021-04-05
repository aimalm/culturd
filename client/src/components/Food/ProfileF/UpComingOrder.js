import React from "react";
import { RiContactsBookLine } from "react-icons/ri";
import {axois} from "../../Axois/Axois"

function UpComingOrder({ orderData, dishData, userData }) {
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
      
  











  //let productIDArray = orderData.forEach((order) => order.product_id);

  //console.log(orderData.forEach(order => order.product_id ))

  //console.log(dishData);
  let dishCookByME = dishData.filter(
    (dish) => dish.cookerId == "606b2d70b3d1692a3cc3ac4b"
  );



  let products = ["product1", "product2"];

  let newObj = { dish1: ["a", "b", "c"], dish2: ["1", "2"], dish3: ["x", "y"] };

  


  // let orderDataIDArray = orderData.map(order=>order.product_id)
  // console.log(orderDataIDArray)

  // let x = dishData.filter(dish=>dish._id.includes("606b401a42a5f64440516d47"))
  // console.log(x.map((dish=>dish.dishName)))
  //   let dishCookByme = dishData.filter((dish) => dish.cooker_id)

  //   console.log(dishCookByme)

  //  let cookerOrder = orderData.filter(order=>order.product_id.includes(productIdArray))
  // console.log(cookerOrder)
  //   let dishInfo = dishData.filter((dish) => dish.cookerId === userData._id);
  //   console.log(dishInfo);

  return <div></div>;
}

export default UpComingOrder;
