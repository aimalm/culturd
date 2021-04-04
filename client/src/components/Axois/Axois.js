import Axios from "axios";

export const axois = Axios.create({
  baseURL: "http://localhost:5000/culturd_api/Em3Wi5va8is15",
});

//prepare the array for ingredients and keywords before the POST req
export const removeEmptyString = (string1, string2, string3, string4) => {
  let validArray = [string1];

  if (string2 !== "") {
    validArray.push(string2);
  }
  if (string3 !== "") {
    validArray.push(string3);
  }
  if (string4 !== "") {
    validArray.push(string4);
  }
  return validArray;
};

//Patch user info
// TODO: have to call the getUser() again?
export const updateUser = async (id, values) => {
  const newObj = {
    firstName: values.firstName,
    lastName: values.lastName,
    ProfilePicture: values.ProfilePicture,
    email: values.email,
    // password: values.password,
    address: values.address,
  };
  await axois
    .patch(`/user/${id}`, newObj)
    .catch((err) => console.log(err))
   // .then(getUser(id));
};

//Get all for food_order
export const getFoodOrder = async () => {
  await axois.get("/food_order").catch((err) => console.log(err));
};
//POST for food_order
export const createFoodOrder = async (amount,shoppingCart) => {
  const newObj = {
    user_id: Math.round(Math.random() * 10000),
    product_id: shoppingCart.map((dish) => dish._id),
    payment: "yes",
    amount: amount,
    pickup_date: new Date().toString(),
    Pickup_address: shoppingCart.map((dish) => dish.address),
  };
  
  await axois
    .post("/food_order", newObj)
    .then((res) => getFoodOrder(res))
    .catch((err) => console.error(err));
};
