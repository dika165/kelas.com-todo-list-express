import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

export const userUpdateSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
});
