import express from "express";
import * as UserService from '../services/userService.js';

const router = express.Router();
router.get('/', UserService.getUsers);
router.get('/:id', UserService.getUserById);
router.post('/', UserService.createUser);
router.put('/:id', UserService.updateUser);
router.delete(':id', UserService.deleteUser);

export default router;
