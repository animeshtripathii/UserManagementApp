import express from 'express';
import { createUser, updateUser, getAllUsers, deleteUser, updatePartialUser, getUserById } from '../Controller/userController.js';
import { checkAuth, validUserId, checkById } from '../middleware/auth.js';

const router = express.Router();

router.get('/get', checkAuth, getAllUsers);
router.post('/getbyid', checkById, getUserById); 
router.post('/add', createUser);
router.put('/update/:id', validUserId, updateUser);
router.patch('/update/:id', validUserId, updatePartialUser);
router.delete('/delete/:id', validUserId, deleteUser);

export default router;