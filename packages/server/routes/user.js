import express from 'express';

import { signIn, signUp } from '../controllers/user.js';

export const userRoutes = express.Router();

userRoutes.post('/signin', signIn);
userRoutes.post('/signup', signUp);
