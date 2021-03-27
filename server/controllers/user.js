import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';

const router = express.Router();

export const getAllUsers = async (req, res) => { 
    try {
         const getAllUsers = await User.find();
                
        res.status(200).json(getAllUsers);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const showUser = async (req, res) => { 

    const id = req.params._id;

    try {
        const showUser = await User.findById(id);
        
        res.status(200).json(showUser);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAnUser = async (req, res) => {
    //const { title, message, selectedFile, creator, tags } = req.body;
    
    try {
        const createAnUser = new User(req.body)

        await createAnUser.save();

        res.status(201).json(createAnUser);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 export const updateAnUser = async (req, res) => {

         const id = req.params._id;
        //const { eventTitle, description } = req.body;
        
         if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
         const updateAnUser = req.body;
    
         await User.findByIdAndUpdate(id, updateAnUser, { new: true });
    
        res.json(updateAnUser);
}

export const deleteAnUser = async (req, res) => {
    const id = req.params._id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "Order deleted successfully." });
}



export default router;