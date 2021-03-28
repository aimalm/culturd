import express from 'express';
import mongoose from 'mongoose';

import Booking from '../models/BookedEvents.js';

const router = express.Router();

export const getAllBookedEvents = async (req, res) => { 
    try {
        const findBookings = await Booking.find();
        res.status(200).json(findBookings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAnEvent = async (req, res) => { 
    const id = req.params._id;
    try {
        const bookedEvent = await Booking.findById(id);
        res.status(200).json(bookedEvent);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const bookAnEvent = async (req, res) => {
    //const { title, message, selectedFile, creator, tags } = req.body;
    try {
        const bookEvent = new Booking(req.body)
        await bookEvent.save();
        res.status(201).json(bookEvent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 export const updateBooking = async (req, res) => {
    const id = req.params._id;
    //const { eventTitle, description } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateABooking = req.body;
    await Booking.findByIdAndUpdate(id, updateABooking, { new: true });
    res.json(updateABooking);
}

export const deleteBooking = async (req, res) => {
    const id = req.params._id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Booking.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

export default router;