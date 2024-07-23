import User from '../models/user.model.js';
import { getUserById } from '../services/user.service.js';
import jwt from 'jsonwebtoken';

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.userId;
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

    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();
    console.log('User saved to database:', savedUser);

    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getExerciseDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ 'exercises.id': id }, { 'exercises.$': 1 });
    if (!user || !user.exercises.length) {
      return res.status(404).json({ message: 'Exercise not found' });
    }
    res.status(200).json(user.exercises[0]);
  } catch (error) {
    console.error('Error fetching exercise details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addExercise = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newExercise = req.body;
    user.exercises.push(newExercise);
    await user.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addSetToExercise = async (req, res) => {
  const { exerciseId } = req.params;
  const { reps, weight, time } = req.body;
  const userId = req.userId;

  try {
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const exercise = user.exercises.find(ex => ex.id === parseInt(exerciseId));
      if (!exercise) {
          return res.status(404).json({ message: 'Exercise not found' });
      }

      const newSet = { id: Math.floor(Math.random() * 1000), reps, weight, time };
      exercise.sets.push(newSet);
      await user.save();

      res.status(201).json(newSet);
  } catch (error) {
      console.error('Error adding set to exercise:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};