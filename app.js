import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouters from './routes/userRoutes.js'; 
import postRouters from './routes/postRoutes.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api/user', userRouters);
app.use('/api/post', postRouters);


export default app;