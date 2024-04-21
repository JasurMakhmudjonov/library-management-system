const Joi = require("joi");

exports.postUserSchema = {
  body: Joi.object({
    firstName: Joi.string().trim().not().empty().required(),
    lastName: Joi.string().trim().not().empty().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid("librarian", "admin").required(),
  }),
};

exports.getUsersSchema = {
  query: Joi.object({
    q: Joi.string().min(1),
    sortBy: Joi.string().valid(
      "last_name",
      "fist_name",
      "createdAt",
      "updatedAt"
    ),
    order: Joi.string().valid("ASC", "DESC"),
    offset: Joi.number().integer().min(0),
    limit: Joi.number().integer().min(1),
  }),
};

exports.patchUserSchema = {
  body: Joi.object({
    firstName: Joi.string().trim().not().empty(),
    lastName: Joi.string().trim().not().empty(),
    email: Joi.string().email(),
    role: Joi.string().valid("librarian", "admin"),
  }),
};
