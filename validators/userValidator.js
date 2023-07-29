import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().required(),
    completed: Joi.boolean().required(),
});

export const userUpdateSchema = Joi.object({
    name: Joi.string().required(),
    completed: Joi.boolean(),
});