import express from 'express';
import { getCurrentUser } from '../controllers/data.controller.js';
import { getUsers, loginUser, addUser } from '../controllers/data.controller.js';
import authenticateToken from '../middleware/auth.js';

export const router = express.Router();

router.route('/users').get(authenticateToken, getUsers);

router.route('/login').post(loginUser)

router.route('/current_user').get(authenticateToken, getCurrentUser);

// router.route('/users').post(addUser)

