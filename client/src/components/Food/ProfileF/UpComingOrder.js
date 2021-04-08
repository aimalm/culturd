import React from "react";

function UpComingOrder({ orderData, dishData, userData }) {
  console.log("orderData in profileF:", orderData);

  let onlyProductId = orderData.map((order) => order.product_id);
  console.log("onlyProductID: ", onlyProductId);


 




  let dishPostByMe = dishData.filter((dish) => dish.cookerId == userData._id);
  console.log("dishPostByMe: ", dishPostByMe);

  let dishPostByMeID = dishPostByMe.map((dish) => dish._id);
  console.log("dishPostByMeID: ", dishPostByMeID);

  let a = ["606d80e54a01683c543245bb", "606d6ac14a01683c543245b2"];

  let c = dishPostByMeID.filter((val) => a.includes(val));

  console.log(c);

  let myOrder = dishData.filter((dish) => dish._id === c);

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
