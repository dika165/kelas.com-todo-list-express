import express from "express";
import * as taskService from '../services/taskService.js';

const router = express.Router();

router.get('/', taskService.getTasks);
router.get('/:id', taskService.getDetailTask);
router.post('/', taskService.createTask);
router.put('/:id', taskService.updateTask);
router.delete('/:id', taskService.deleteTask);

export default router;