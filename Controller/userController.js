import { 
    userService, 
    userUpdateService, 
    getAllUsersService, 
    deleteUserService,
    getUserByIdService,
    getUsersByActiveStatusService,
    updatePasswordByEmailService,
    getPostById,
    addPostID,
    getPostsByUserIdService
} from '../services/user.service.js';

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = await userService(name, email, password, role);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const { sortBy } = req.query;
        const users = await getAllUsersService(sortBy);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.body; 
        const user = await getUserByIdService(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { email, data } = req.body; 
        if (!data || !data.password) {
             return res.status(400).json({ error: "Password is required inside 'data'" });
        }
        const updatedUser = await updatePasswordByEmailService(email, data.password);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updatePartialUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedUser = await userUpdateService(id, updateData);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;
        if(!email) {
            return res.status(400).json({ error: "Email is required to delete a user" });
        }
        await deleteUserService(email);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUsersByStatus = async (req, res) => {
    try {
        const { isActive } = req.params;
        const statusBool = isActive === 'true';
        const users = await getUsersByActiveStatusService(statusBool);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUsersByActiveStatus = async (req, res) => {
    try {
        const { isActive } = req.body;
        const users = await getUsersByActiveStatusService(isActive);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await getPostById(id);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const addPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const post = await addPostID({ title, content, user: userId });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// New Controller Function
const getPostsByUser = async (req, res) => {
    try {
        const { userId } = req.params; 
        const posts = await getPostsByUserIdService(userId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { 
    createUser, 
    updateUser, 
    getAllUsers, 
    deleteUser, 
    updatePartialUser, 
    getUserById,
    getUsersByStatus ,
    getUsersByActiveStatus,
    getPost,
    addPost,
    getPostsByUser
};