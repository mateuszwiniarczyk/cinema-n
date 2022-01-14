import express from "express";

import { signin, signup } from "../controllers/user.js";

export const userRoutes = express.Router();

userRoutes.post("/signin", signin);
userRoutes.post("/signup", signup);
