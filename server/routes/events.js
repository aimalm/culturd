import express from 'express';

import { getEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.js';
import { getAllBookedEvents, bookAnEvent } from '../controllers/booking.js';


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
 router.get('/booked_events', getAllBookedEvents);
 router.post('/booked_events', bookAnEvent);
// router.get('/event/:_id', getEvent);
// router.patch('/event/:_id', updateEvent);
// router.delete('/event/:_id', deleteEvent);


export default router;