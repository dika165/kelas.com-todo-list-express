import * as UserModel from "../models/user.js";
import { success, errorResp, response } from "../utils/response.js";
import * as UserValidator from "../validators/userValidator.js";


export const getUsers = async (req, res, next) => {
    try {
        const [result] = await UserModel.getAll();
        success(res,"success", result );
    } catch(error) {
        next(error);
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const [tasks] = await UserModel.getById(req.params.id);
        success(res, "success", tasks[0]);
    } catch (error) {
        next(error)
    }

}

export const createUser = async (req, res,next) => {
    try {
        const value = UserValidator.userSchema.validateAsync(req.body);
        const [result] = await UserModel.createData(value);
        let msg = "task created"
        let data = result.insertId;
        success(res, msg, data, 201)
    } catch (error) {
        next(error);
    }

}

export const updateUser = async (req, res, next) => {
    try {
        const value = UserValidator.userUpdateSchema.validateAsync(req.body);
        const [result] = await UserModel.updateData(req.params.id, value);
        if (result.affectedRows > 0){
            success(res, "update success",{})
        } else {
            errorResp(res, "data tidak di temukan",400)
        }

    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const [result] = await UserModel.deleteData(req.params.id);
        success(res, "success delete task", result)
    } catch (error) {
        next(error)
    }
}
