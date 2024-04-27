const Joi = require("joi");

 exports.postLoginSchema = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    })
 }