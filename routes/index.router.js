import express from 'express';
const router = express.Router();
import registerRouter from './register.router.js';
import loginRouter from './login.router.js';
import { indexController } from '../controllers/index.controller.js';

router.get('/v1', indexController);

router.use('/register', registerRouter);
router.use('/login', loginRouter);


export default router;