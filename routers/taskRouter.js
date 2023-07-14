import express from "express";
import * as taskService from '../services/taskService.js';

const router = express.Router();

router.get("/", taskService.getTask);
router.get("/:id", taskService.getById);
router.post("/", taskService.createTask);
router.put("/:id", taskService.updateTask);
router.delete("/:id", taskService.deleteTask);

export default router;