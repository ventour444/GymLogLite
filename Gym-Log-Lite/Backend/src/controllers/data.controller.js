import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { getUserById } from '../services/user.service.js';
import jwt from 'jsonwebtoken'

export const getCurrentUser = async (req, res) => {
  try {
      const userId = req.userId;  // This should be set by your authentication middleware
      const user = await getUserById(userId);
      res.status(200).json(user);
  } catch (error) {
      console.error('Error getting current user:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const loginUser = async (req, res) => {
  const { password, email } = req.body;
  console.log('Request Body:', req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', user, token });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



export const addUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    console.log('Received data:', { username, email, password });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      username,
      email,
      password
      
    });

    const savedUser = await newUser.save();

    console.log('User saved to database:', savedUser);

    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
