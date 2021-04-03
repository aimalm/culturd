import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function ReactPayPal({
  setPaid,
  setcheckingOut,
  calcSubTotal,
  setShoppingCart,
  createFoodOrder,
}) {
  let chargeAmount = calcSubTotal();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Your description",
          amount: {
            currency_code: "EUR",
            value: JSON.stringify(chargeAmount),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    actions.order.capture();
    setPaid(true);

    createFoodOrder(chargeAmount);

    setTimeout(() => {
      setShoppingCart([]);
      setPaid(false);
      setcheckingOut(false);
    }, 3000);
  };

  return (
    <PayPalButton
      className="paypal-button"
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}

export default ReactPayPal;
