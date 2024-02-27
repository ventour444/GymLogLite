import mongoose from 'mongoose';
import Users from '../models/user.model.js';
import mockExerciseData from '../../test/mockExerciseData.js';

const main = async () => {
    console.log(`Connecting to database at ${process.env.DB_URI}`);
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/TestUserDB');
        console.log(`Connected to DB`);

        await Users.deleteMany();

        const insertedUsers = await Users.insertMany(mockExerciseData.users);
        console.log(insertedUsers);

        console.log('Loaded users to the DB');
    } catch (error) {
        console.error('Error connecting to database or inserting users:', error);
    }
};

export default main;
