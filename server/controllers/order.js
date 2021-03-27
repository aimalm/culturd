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

// export const getFood = async (req, res) => { 

//     const id = req.params._id;

//     try {
//         const showFood = await Food.findById(id);
        
//         res.status(200).json(showFood);
        
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// export const createFoodPost = async (req, res) => {
//     //const { title, message, selectedFile, creator, tags } = req.body;
    
//     try {
//         const createFoodPost = new Food(req.body)

//         await createFoodPost.save();

//         res.status(201).json(createFoodPost);
//         //res.send("create")

//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

//  export const updateFood = async (req, res) => {

//          const id = req.params._id;
//         //const { eventTitle, description } = req.body;
        
//          if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//          const updateFood = req.body;
    
//          await Food.findByIdAndUpdate(id, updateFood, { new: true });
    
//         res.json(updateFood);
// }

// export const deleteFoodPost = async (req, res) => {
//     const id = req.params._id;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await Food.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }



export default router;