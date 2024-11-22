import e from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["principal", "teacher", "student"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("user", userSchema);