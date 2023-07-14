import Task from "../models/task.js";
import { nanoid } from "nanoid";

let tasks = [];
const getTask = async (req, res) => {
    const [tasks, field] = await Task.getAll()
    res.json(tasks);
}

const getById = (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({message:"data not found!!"})

    res.json(task);
}

const createTask = async (req, res) => {
    const [task] = await Task.createTask(req.body.name, req.body.completed);
    
    res.json(task.insertId)
}

const updateTask = (req, res) => {
    const task = tasks.find(t => t.id === req.params.id)
    if (!task) return res.status(404).json({message:"data not found!!"})
    
    task.name = req.body.name;
    task.completed = req.body.completed;
    res.json(task);
}

const deleteTask = (req, res) => {
    const index = tasks.findIndex(t=> t.id === req.params.id);
    if(!task) return res.status(404).json({message:"data not found!"})

    const task = tasks.splice(index, 1);
    res.json(task);
}

export { getTask, getById, updateTask, createTask, deleteTask }