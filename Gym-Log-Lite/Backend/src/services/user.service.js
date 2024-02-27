import User from '../models/user.model.js';

// Service function to retrieve all users
export const getUsers = async () => {
    try {
        const users = await User.find({});
        console.log(users);
        return users;
    } catch (error) {
        throw error;
    }
}

// // Service function to add a new user
// export const addUser = async (newUser) => {
//     try {
//         const user = new User(newUser);
//         return await user.save();
//     } catch (error) {
//         throw error;
//     }
// }

// Service function to authenticate a user
export const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        
        if (!user) {
            throw new Error('User not found');
        }

        if (user.password !== password) {
            throw new Error('Incorrect password');
        }

        return user;
    } catch (error) {
        throw error;
    }
}