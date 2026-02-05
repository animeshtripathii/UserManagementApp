import express from 'express';
import { createUser, updateUser, getAllUsers, deleteUser, updatePartialUser, getUserById } from '../Controller/userController.js';
import { checkAuth, validUserId, checkById, verifyToken } from '../middleware/auth.js';
import { validateCreateUserDTO } from '../DTO/user.dto.js';

const router = express.Router();

router.get('/get', checkAuth, getAllUsers);
router.post('/getbyid', verifyToken, checkById, getUserById);
router.post('/add', validateCreateUserDTO, createUser);
router.put('/update/:id', validUserId, updateUser);
router.patch('/update/:id', validUserId, updatePartialUser);
router.delete('/delete/:id', validUserId, deleteUser);

export default router;