import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        max_length: 50,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        max_length: 50,
        unique: true
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    toJSON: {
        getters: true,
    },
    timestamps: true
});
const User = model('User', userSchema);
export default User;
