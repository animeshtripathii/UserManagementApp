import express from 'express';
import { createUser, updateUser, getAllUsers, deleteUser,updatePartialUser } from '../Controller/userController.js';

const router = express.Router();

router.get('/get', getAllUsers);
router.post('/add', createUser);
router.put('/update/:id', updateUser);
router.patch('/update/:id', updatePartialUser);
router.delete('/delete/:id', deleteUser);

export default router;