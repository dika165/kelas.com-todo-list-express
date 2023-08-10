import express from "express";
import * as UserService from '../services/userService.js';

const router = express.Router();
router.post('/', UserService.getUsers);

export default router;
