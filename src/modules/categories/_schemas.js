 
const Joi = require("joi");

exports.postCategorychema = {
  body: Joi.object({
    name: Joi.string().trim().not().empty().required(),
    parentId: Joi.number().integer(),
  }),
};

exports.getCategorySchema = {
  query: Joi.object({
    q: Joi.string().min(1),
    sortBy: Joi.string().valid("name", "createdAt", "updatedAt"),
    order: Joi.string().valid("ASC", "DESC"),
    offset: Joi.number().integer().min(0),
    limit: Joi.number().integer().min(1),
  }),
};


exports.patchCategorychema = {
  body: Joi.object({
    name: Joi.string().trim().not().empty(),
  }),
};