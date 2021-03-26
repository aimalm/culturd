import express from 'express';

import { getEvents, createEvent, getEvent, updateEvent, deleteEvent } from '../controllers/events.js';

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

export default router;