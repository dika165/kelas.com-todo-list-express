import { nanoid } from "nanoid";
import Task from "../models/task.js";
import { success, errorResp, response } from "../utils/response.js";
import { taskSchema, taskUpdateSchema } from "../validators/taskValidator.js";

const getTasks = async (req, res, next) => {
    try {
        const [result] = await Task.getAll();
        success(res,"success", result );
    } catch(error) {
        next(error);
    }
}

const getDetailTask = async (req, res, next) => {
    try {
        const [tasks] = await Task.getById(req.params.id);
        success(res, "success", tasks[0]);
    } catch (error) {
        next(error)
    }
    
}

const createTask = async (req, res,next) => {
    try {
        const value = taskSchema.validateAsync(req.body);
        const [result] = await Task.create(value);
        let msg = "task created"
        let data = result.insertId;
        success(res, msg, data, 201)
    } catch (error) {
        next(error);
    }
    
}

const updateTask = async (req, res, next) => {
    try {
        const value = taskUpdateSchema.validateAsync(req.body);
        const [result] = await Task.update(req.params.id, value);
        console.log(result);
        success(res, "update success", {})
    } catch (error) {
        next(error)
    }
}

const deleteTask = async (req, res, next) => {
    try {

        const [result] = await Task.delete(req.params.id);
        success(res, "success delete task", result)
    } catch (error) {
        next(error)
    }
}

export { getTasks, getDetailTask, createTask, updateTask, deleteTask}