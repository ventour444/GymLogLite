import express from 'express';
import { getCurrentUser, getExerciseDetails, addExercise, addSetToExercise } from '../controllers/data.controller.js';
import { getUsers, loginUser, addUser } from '../controllers/data.controller.js';
import authenticateToken from '../middleware/auth.js';

export const router = express.Router();

router.route('/users').get(authenticateToken, getUsers);
router.route('/login').post(loginUser);
router.route('/current_user').get(authenticateToken, getCurrentUser);
router.route('/exercises/:id').get(getExerciseDetails);
router.route('/exercises').post(authenticateToken, addExercise);
router.route('/exercises/:exerciseId/sets').post(authenticateToken, addSetToExercise);

// router.route('/users').post(addUser)
