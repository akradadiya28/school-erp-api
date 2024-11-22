import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const auth = (req, res, next) => {
    const token = req.header("auth-token");
    try {

    } catch (error) {

    }
}