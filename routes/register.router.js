import express from 'express';
const registerRouter = express.Router();
import { getRegister, addRegister } from '../controllers/register.controller.js';

registerRouter.get('/register', getRegister);
registerRouter.post('/register', addRegister);

export default registerRouter;
