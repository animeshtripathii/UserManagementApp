import users from '../db/users.js';

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            throw new Error('Name and Email are required');
        }
        const newUser = { id: Date.now().toString(), name, email };
        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        for (const key in req.body) {
            if (key === 'id') {
                continue;
            }
            users[userIndex][key] = req.body[key];
        }
        res.status(200).json(users[userIndex]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updatePartialUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        if (!name && !email) {
            throw new Error('At least one field (name or email) is required for partial update');
        }

        if (name) {
            users[userIndex].name = name;
        }
        if (email) {
            users[userIndex].email = email;
        }

        res.status(200).json(users[userIndex]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        users.splice(userIndex, 1);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { createUser, updateUser, getAllUsers, deleteUser, updatePartialUser };