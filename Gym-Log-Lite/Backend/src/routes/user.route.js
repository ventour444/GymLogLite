import express from 'express';
import { getUsers, loginUser } from '../controllers/data.controller.js';

export const router = express.Router();

router.route('/users').get(getUsers);

router.route('/login').post(loginUser)

