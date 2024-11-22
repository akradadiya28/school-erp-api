import userModel from "../models/user.model";
import bcrypt from "bcrypt";

export const getRegister = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const addRegister = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await userModel({
            name,
            email,
            password: hashedPassword,
            role
        });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}