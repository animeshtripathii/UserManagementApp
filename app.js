import express from 'express';
import userRouters from './routes/userRoutes.js'; 
const app = express();
app.use(express.json());

//base route
app.use('/api/user',userRouters);


export default app;
