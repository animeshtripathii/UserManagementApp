import User from '../model/user.js';
import Post from '../model/post.js';

export const userService = async (name, email, password, role) => {
    const newUser = await User.create({ name, email, password, role });
    return newUser;
};

export const getAllUsersService = async (sortBy) => {
    const sortCriteria = sortBy ? { [sortBy]: 1 } : { createdAt: -1 };
    const users = await User.find({}).sort(sortCriteria);
    return users;
};

export const userUpdateService = async (id, updateData) => {
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedUser) {
        throw new Error('User not found');
    }
    return updatedUser;
};

export const deleteUserService = async (email) => {
    const deletedUser = await User.findOneAndDelete({ email: email });
    if (!deletedUser) {
        throw new Error('User not found');
    }
    return deletedUser;
};

export const getUserByIdService = async (id) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

export const updatePasswordByEmailService = async (email, data) => {
    const updatedUser = await User.findOneAndUpdate(
        { email: email },
        { $set: { password: data } },
        { new: true }
    );

    if (!updatedUser) {
        throw new Error('User with this email not found');
    }
    return updatedUser;
};

export const getUsersByActiveStatusService = async (isActive) => {
    const users = await User.find({ isActive: isActive }).skip(2).limit(10);
    return users;
};

export const getPostById = async (id) => {
    const foundPost = await Post.findById(id).populate('user', 'name email'); // Populate user details
    if (!foundPost) {
        throw new Error('Post not found');
    }
    return foundPost;
};

export const addPostID = async (postData) => {
    const newPost = await Post.create(postData);
    return newPost;
};

export const getPostsByUserIdService = async (userId) => {
    // Find all posts where the 'user' field matches the ID
    const posts = await Post.find({ user: userId });
    return posts;
};