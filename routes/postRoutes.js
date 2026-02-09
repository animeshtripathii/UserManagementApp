import express from 'express';
import { 
    getPost,
    addPost,
    getPostsByUser 
} from '../Controller/userController.js';

const router = express.Router();

router.post('/addPost', addPost);
router.get('/user/:userId', getPostsByUser); 

router.get('/:id', getPost);

export default router;