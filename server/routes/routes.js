import express from 'express';

import { getEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.js';
import { getAllBookedEvents, getAnEvent, bookAnEvent, updateBooking, deleteBooking } from '../controllers/booking.js';
import { getAllFoods, getFood, createFoodPost, updateFood, deleteFoodPost, deleteAllFoodPosts, getAllFoodOrder } from '../controllers/food.js';
import { getAllOrders, createAnOrder, showAnOrder, updateAnOrder, deleteAnOrder } from '../controllers/order.js';
import { showUserById, signin, signup, getAllUsers, createAnUser, showUser, updateAnUser, deleteAnUser, updateAnUserImage } from '../controllers/user.js';
import upload from '../middleware/upload.js'
//import  validation from '../middleware/validation.js'






const router = express.Router();

router.get('/event', getEvents);
router.post('/event', createEvent);
router.get('/event/:_id', getEvent);
router.patch('/event/:_id', updateEvent);
router.delete('/event/:_id', deleteEvent);
//router.patch('/:id/likePost', likePost);
// ---------------------------------------------------------

//routes for the booked events
 router.get('/booked_event', getAllBookedEvents);
 router.post('/booked_event', bookAnEvent);
 router.get('/booked_event/:_id', getAnEvent);
 router.patch('/booked_event/:_id', updateBooking);
 router.delete('/booked_event/:_id', deleteBooking);
// ----------------------------------------------------------

//routes for the foods
router.get('/food', getAllFoods);
router.post('/food', createFoodPost);
router.get('/food/:_id', getFood);
router.patch('/food/:_id', updateFood);
router.delete('/food/:_id', deleteFoodPost);
router.delete('/food/', deleteAllFoodPosts);

router.get('/food-order/:cook_Id', getAllFoodOrder);

// ------------------------------------------------------------

//routes for the food order
router.get('/food_order', getAllOrders);
router.post('/food_order', createAnOrder);
router.get('/food_order/:_id', showAnOrder);
router.patch('/food_order/:_id', updateAnOrder);
router.delete('/food_order/:_id', deleteAnOrder);
// ------------------------------------------------------------

//routes for the users
router.get('/user', getAllUsers);
router.post('/user', createAnUser);


router.get('/user/:email', showUser);
router.get('/user/id/:_id', showUserById);


router.patch('/user/:_id', updateAnUser);
router.patch('/user/email/:_id', upload, updateAnUserImage);

router.delete('/user/:_id', deleteAnUser);

router.post("/signin", signin);
router.post("/signup", signup);




export default router;