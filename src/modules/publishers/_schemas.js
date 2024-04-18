const Joi = require("joi");

exports.getPublishersSchema = {
    //body : {},
  query: Joi.object({
    //sorting
    q: Joi.string().min(1),
    sortBy: Joi.string().valid("name", "createdAt", "updatedAt"),
    order: Joi.string().valid("ASC", "DESC"),
    // for pagination
    offset: Joi.number().integer().min(0),
    limit: Joi.number().integer().min(1),
  }),
  // params: {},
};
