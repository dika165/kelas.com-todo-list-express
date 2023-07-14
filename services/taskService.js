import { nanoid } from "nanoid";
import Task from "../models/task.js";

const tasks = [];
const getTasks = (req, res) => {
    res.json(tasks);
}

const getDetailTask = (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({message:"data not found!!"})

    res.json(task);
}

const createTask = (req, res) => {
    const task = new Task(nanoid(6), req.body.name, req.body.completed);
    
    tasks.push(task);
    res.json(task)
}

const updateTask = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id)
    console.log(req.params.id);
    if (!task) return res.status(404).json({message:"data not found!!"})
    
    task.name = req.body.name;
    task.completed = req.body.completed;
    res.json(task);
}

const deleteTask = (req, res) => {
    (req, res) => {
        const index = tasks.findIndex(t=> t.id === req.params.id);
        if(!task) return res.status(404).json({message:"data not found!"})
    
        const task = tasks.splice(index, 1);
        res.json(task);
    }
}

export { getTasks, getDetailTask, createTask, updateTask, deleteTask}