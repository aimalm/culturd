import React from "react";
import ReactDOM from "react-dom"


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


function ReactPayPal({setPaid, paid, setcheckingOut, calcSubTotal, shoppingCart}) {
  

  let chargeAmount = calcSubTotal()


  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          description: "Your description",
                amount: {
                  currency_code: "EUR",
                  value: chargeAmount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
     actions.order.capture();
     setPaid(true)
     setcheckingOut(false)
     
  };


  return (

    
    <PayPalButton className="paypal-button"
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
    
  );
}


export default ReactPayPal
