import User from "../model/userModel.js";
import mongoose from "mongoose";

export const create = async(req,res) => {
    try {
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User allready exists"});
        }
        const savedData = await newUser.save();
        // res.status(200).json(savedData);
        res.status(200).json({message:"User created successfully"});

    }catch (err) {
        res.status(500).json({errorMessage:err.message})
    }
};

export const getAllUsers = async(req,res) => {
    try {
        const userData = await User.find();
        if(!userData || userData.length === 0){
           return res.status(404).json({message:"User data not found"});
        }
        res.status(200).json(userData);
    }catch (err) {
        res.status(500).json({errorMessage:err.message})
    }
};

export const getUserById = async(req,res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const userExist = await User.findById(id);
        if(!userExist) {
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json(userExist);
    }catch (err) {
        res.status(500).json({errorMessage:err.message})
    }
};

export const update = async(req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist) {
            return res.status(404).json({message:"User not found"});
        }
        const updatedData = await User.findByIdAndUpdate(id,req.body,{
            new:true
        });
        // res.status(200).json(updatedData);
        res.status(200).json({message:"User updated successfully"});
    }catch (err) {
        res.status(500).json({errorMessage:err.message})
    }
};

export const deleteUser = async(req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted successfully"});
    }catch (err) {
        res.status(500).json({errorMessage:err.message});
    }
}