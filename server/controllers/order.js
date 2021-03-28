import express from 'express';
import mongoose from 'mongoose';

import Order from '../models/foodOrder.js';

const router = express.Router();

export const getAllOrders = async (req, res) => { 
    try {
        const findFoods = await Order.find();    
        res.status(200).json(findFoods);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const showAnOrder = async (req, res) => { 
    const id = req.params._id;
    try {
        const showAnOrder = await Order.findById(id);
        res.status(200).json(showAnOrder);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAnOrder = async (req, res) => {
    //const { title, message, selectedFile, creator, tags } = req.body;
    try {
        const createAnOrder = new Order(req.body)
        await createAnOrder.save();
        res.status(201).json(createAnOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 export const updateAnOrder = async (req, res) => {
    const id = req.params._id;
    //const { eventTitle, description } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateAnOrder = req.body;
    await Order.findByIdAndUpdate(id, updateAnOrder, { new: true });
    res.json(updateAnOrder);
}

export const deleteAnOrder = async (req, res) => {
    const id = req.params._id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Order.findByIdAndRemove(id);
    res.json({ message: "Order deleted successfully." });
}

export default router;