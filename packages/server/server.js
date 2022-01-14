import express from "express";
import { userRoutes } from "./routes/user.js";

const app = express();

app.use(express.json());

const PORT = 3000;

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
