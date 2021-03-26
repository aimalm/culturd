import express from 'express';

import { getEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.js';
import { getAllBookedEvents, getAnEvent, bookAnEvent, updateBooking } from '../controllers/booking.js';


 const router = express.Router();

//     router.get('/', (req, res) => {
//         res.send("This Works");
//     })

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
// router.delete('/event/:_id', deleteEvent);


export default router;