import Axios from "axios";

export const API_KEY = process.env.REACT_APP_API_KEY
export const API_URL = process.env.REACT_APP_API_URL

export const axois = Axios.create({
  baseURL: `${API_URL}${API_KEY}`,
});

//prepare the array for ingredients and keywords before the POST req
const removeEmptyString = (string1, string2, string3, string4) => {
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

//POST for food get input from the form + userData
export const createFood = async (userData, values) => {
  const newObj = {
    dishName: values.dishName,
    ingredients: removeEmptyString(
      values.ingredient1,
      values.ingredient2,
      values.ingredient3,
      values.ingredient4
    ),
    keywords: removeEmptyString(
      values.keyword1,
      values.keyword2,
      values.keyword3,
      values.keyword4
    ),
    category: values.category,
    vegetarian: values.vegetarian,
    dishDescription: values.dishDescription,
    cookerId: userData._id,
    cooker: userData.firstName,
    cookerImage:
      userData.ProfilePicture === undefined
        ? "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        : userData.ProfilePicture,
    cookerScore: ["star", "star", "star"],
    price: values.Price,
    pickupDate: values.pickupdate.substring(0, 10),
    openingHours: values.pickupdate.substring(11, 16),
    address: values.address,
    imageUrl: values.imageUrl,
    quantity: "1",
  };
  //console.log(newObj);
  await axois.post("/food", newObj).catch((err) => console.error(err));
};

//delete for food
export const deleteFoodPost = async (id) => {
  console.log(id);
  await axois.delete(`/food/${id}`).catch((err) => console.log(err));
};

//POST for bookform workshop
export const createBookForm = async (values) => {
  const newObj = {
    firstname: values.firstname,
    lastname: values.lastname,
    telephone: values.myTelephone,
    amount_of_tickets: values.number,
    email: values.email,
    country: values.country,
    book_date: values.date_time,
  };
  //console.log("axois obj:", newObj);
  await axois.post("/booked_event", newObj).catch((err) => console.error(err));
};

//Patch user info
export const updateUser = async (id, values) => {
  const newObj = {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    address: values.address,
  };

  console.log(newObj);
  await axois.patch(`/user/${id}`, newObj).catch((err) => console.log(err));
};

//Get all for food_order
export const getFoodOrder = async () => {
  await axois.get("/food_order").catch((err) => console.log(err));
};

//POST for food_order
export const createFoodOrder = async (amount, shoppingCart) => {
  const newObj = {
    user_id: Math.round(Math.random() * 10000),
    product_id: shoppingCart.map((dish) => dish._id),
    cooker_id: shoppingCart.map((dish) => dish.cookerId),
    payment: "yes",
    amount: amount,
    order_date: new Date().toString(),
    Pickup_address: shoppingCart.map((dish) => dish.address),
  };

  await axois
    .post("/food_order", newObj)
    .then((res) => getFoodOrder(res))
    .catch((err) => console.error(err));
};
