const Joi = require('joi')

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(2).required(),
})

const validPwSchema = Joi.string().min(2).required()

module.exports = {
    authSchema,
    validPwSchema
}