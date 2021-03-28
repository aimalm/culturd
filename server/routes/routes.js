import express from 'express';

import { getEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.js';
import { getAllBookedEvents, getAnEvent, bookAnEvent, updateBooking, deleteBooking } from '../controllers/booking.js';
import { getAllFoods, getFood, createFoodPost, updateFood, deleteFoodPost } from '../controllers/food.js';
import { getAllOrders, createAnOrder, showAnOrder, updateAnOrder, deleteAnOrder } from '../controllers/order.js';
import { getAllUsers, createAnUser, showUser, updateAnUser, deleteAnUser } from '../controllers/user.js';





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
router.get('/user/:_id', showUser);
router.patch('/user/:_id', updateAnUser);
router.delete('/user/:_id', deleteAnUser);


export default router;