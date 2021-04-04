import express from 'express';
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    const email = req.params.email;
    console.log(email)
    try {
        const showUser = await User.findOne({email: "zaherc@gmail.com"});
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

//signin signup


const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, TypeOfUser } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ TypeOfUser, email, password: hashedPassword, lastName, firstName });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export default router;