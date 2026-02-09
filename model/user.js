import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    isActive: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true });


// userSchema.pre('save', async function(next) {
  
//     try {
//         console.log('Pre-save hook triggered for user');
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//     } catch (error) {
//     }
// });

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        console.log('Password not modified, skipping hashing');
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model('user', userSchema);

export default User;