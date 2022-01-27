import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user.js';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
