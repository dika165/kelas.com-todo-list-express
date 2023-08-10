import * as UserModel from "../models/user.js";
import { success, errorResp, response } from "../utils/response.js";
import * as UserValidator from "../validators/userValidator.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'kelas.com';
const REFRESH_SECRET_KEY = 'kelas.com';


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
        console.log(await value);
        const saltRound = 10;
        let hashedPass = "";
        bcrypt.hash(value.password, saltRound, (err, hash) => {
            hashedPass = hash;
        });
        value.password = hashedPass;
        const [result] = await UserModel.createData(await value);
        let msg = "user created"
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

export const authUser = async (req, res, next) => {
    try {
        const user = await UserModel.authUser(req.body.email);
        if (user.lenght > 0){
            const isValid = bcrypt.compare(req.body.password, user.password);
            if (isValid) {
                let claim = {
                    id: user.user_id,
                    email: user.email
                };
                const accessToken = jwt.sign(claim, SECRET_KEY, {expiresIn: '5m', algorithm:'ES256'});
                const refreshToken = jwt.sign(claim, REFRESH_SECRET_KEY);
                let data = {
                    access_token: accessToken, 
                    refresh_token: refreshToken,
                }
                success(res, 'success', data);
            }
            errorResp(res, 'email atau password salah', 400)
        }
    } catch (error) {
        next(error)
    }
}
