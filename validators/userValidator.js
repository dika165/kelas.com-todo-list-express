import Joi from 'joi';

export const taskSchema = Joi.object({
    name: Joi.string().required(),
    completed: Joi.boolean().required(),
});

export const taskUpdateSchema = Joi.object({
    name: Joi.string().required(),
    completed: Joi.boolean(),
})