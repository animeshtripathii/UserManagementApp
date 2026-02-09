import express from 'express';
import { 
    createUser, 
    updateUser, 
    getAllUsers, 
    deleteUser, 
    updatePartialUser, 
    getUserById,
    getUsersByStatus,
    getUsersByActiveStatus,
} from '../Controller/userController.js';

const router = express.Router();

router.get('/get', getAllUsers); 
router.get('/status/:isActive', getUsersByStatus); 
router.post('/getbyid', getUserById);
router.post('/add', createUser);
router.patch('/update', updateUser);
router.patch('/update/:id', updatePartialUser);
router.delete('/delete', deleteUser);
router.get('/isactive', getUsersByActiveStatus); 


// REMOVED: getPost and addPost (They belong in postRoutes!)

export default router;