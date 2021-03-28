import express from 'express';
import mongoose from 'mongoose';

import Events from '../models/eventsModel.js';

const router = express.Router();

export const getEvents = async (req, res) => { 
    try {
        const findEvents = await Events.find();  
        res.status(200).json(findEvents);
        res.send(findEvents)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getEvent = async (req, res) => { 
    const id = req.params._id;
    try {
        const post = await Events.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEvent = async (req, res) => {
    //const { title, message, selectedFile, creator, tags } = req.body;
    try {
        const newEvent = new Events(req.body)
        await newEvent.save();
        res.status(201).json(newEvent );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEvent = async (req, res) => {
    const id = req.params._id;
    //const { eventTitle, description } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedEvent = req.body;
    await Events.findByIdAndUpdate(id, updatedEvent, { new: true });
    res.json(updateEvent);
}

export const deleteEvent = async (req, res) => {
    const id = req.params._id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Events.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

export default router;