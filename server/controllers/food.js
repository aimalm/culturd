import express from 'express';
import mongoose from 'mongoose';

import Food from '../models/foodModel.js';

const router = express.Router();

export const getAllFoods = async (req, res) => { 
    try {
         const findFoods = await Food.find();
                
        res.status(200).json(findFoods);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFood = async (req, res) => { 

    const id = req.params._id;

    try {
        const showFood = await Food.findById(id);
        
        res.status(200).json(showFood);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createFoodPost = async (req, res) => {
    //const { title, message, selectedFile, creator, tags } = req.body;
    
    try {
        const createFoodPost = new Food(req.body)

        await createFoodPost.save();

        res.status(201).json(createFoodPost);
        //res.send("create")

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//  export const updateBooking = async (req, res) => {

//          const id = req.params._id;
//         //const { eventTitle, description } = req.body;
        
//          if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//          const updateABooking = req.body;
    
//          await Booking.findByIdAndUpdate(id, updateABooking, { new: true });
    
//         res.json(updateABooking);
// }

// export const deleteBooking = async (req, res) => {
//     const id = req.params._id;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await Booking.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }



export default router;