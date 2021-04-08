import React from "react";

function UpComingOrder({ orderData, dishData, userData }) {
  console.log("orderData in profileF:", orderData);

  let onlyProductId = orderData.map((order) => order.product_id).flat()
  console.log("onlyProductID: ", onlyProductId);


  let dishPostByMe = dishData.filter((dish) => dish.cookerId === userData._id).map((dish) => dish._id)
  console.log("dishPostByMe: ", dishPostByMe);


 let compareArray = dishPostByMe.filter((val) => onlyProductId.includes(val));

 console.log( compareArray);

  let myOrder = dishData.filter((dish) => dish._id === compareArray.join());

  console.log("myOrder: ", myOrder);





  // let x;

  //  onlyProductId.forEach(productID => {

  //   x  = dishPostByMe.filter(dish => {
  //     dish._id === productID
  //   })
  // });

  // console.log(x)

  //   let x = onlyProductId.forEach(product => {
  //     dishData.forEach(dish => {

  //         if(dish._id == product ){
  //             console.log(dish)
  //         }

  //     })
  //   })
  // console.log(x)



  return <div></div>;
}

export default UpComingOrder;
