import express from 'express';
const loginRouter = express.Router();
import { getLogin, addLogin } from '../controllers/login.controller.js';

loginRouter.get('/login', getLogin);
loginRouter.post('/login', addLogin);

export default loginRouter;