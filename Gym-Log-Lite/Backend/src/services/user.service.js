import User from '../models/user.model.js';


// Service function to retrieve a single user by ID

export const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        console.log(user);
        return user;
    } catch (error) {
        throw error;
    }
}

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

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return { user, token };

    } catch (error) {
        throw error;
    }
}


// Service function to add a new user
export const addUser = async (userData) => {
    try {
        const { username, email, password } = userData;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        const newUser = new User({
            username,
            email,
            password,
        });

        const savedUser = await newUser.save();

        return savedUser;
    } catch (error) {
        throw error;
    }
};