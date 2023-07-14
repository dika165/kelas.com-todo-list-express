import { nanoid } from "nanoid";
import Task from "../models/task.js";
import { success, errorResp, response } from "../utils/response.js";

const tasks = [];
const getTasks = async (req, res, next) => {
    try {
        const [result] = await Task.getAll();
        success(res,"success", result );
    } catch(error) {
        next(error);
    }
}

const getDetailTask = async (req, res) => {
    try {
        const [tasks] = await Task.getById(id);
        success(res, "success", tasks[0]);
    } catch (error) {
        next(error)
    }
    
}

const createTask = async (req, res) => {
    const [result] = await Task.create({req.body.name, req.body.completed});
    let msg = "task created"
    let data = result.insertId;
    success(res, msg, data, 201)
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