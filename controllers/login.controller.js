import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getLogin = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const addLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ user: user.name, role: user.role }, process.env.TOKEN_KEY, {
                        expiresIn: "2h",
                    });
                    res.status(200).json({
                        message: "Login successful",
                        token: token
                    });
                } else {
                    res.status(400).json({
                        message: "Invalid credentials"
                    });
                }
            })
        } else {
            res.status(400).json({
                message: "Invalid credentials"
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   