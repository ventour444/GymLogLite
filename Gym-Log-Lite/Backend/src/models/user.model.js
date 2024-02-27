import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    exercises: [{
        id: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        sets: [{
            id: { type: Number, required: true },
            reps: { type: Number },
            weight: { type: Number },
            time: { type: Date }
        }],
        distance: { type: Number },
        duration: { type: Number }
    }]
});

const User = mongoose.model('User', userSchema);


export default User;
