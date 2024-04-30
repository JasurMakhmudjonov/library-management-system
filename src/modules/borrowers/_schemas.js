const Joi = require("joi");

exports.postBorrowerSchema = {
  body: Joi.object({
    firstName: Joi.string().trim().not().empty().required(),
    lastName: Joi.string().trim().not().empty().required(),
    email: Joi.string().email().required(),
    username: Joi.string().min(6).required(),
    unitNumber: Joi.string().trim().not().empty().required(),
    streetNumber: Joi.string().not().empty().required(),
    addressLine1: Joi.string().not().empty().required(),
    addressLine2: Joi.string().not().empty().required(),
    city: Joi.string().not().empty().required(),
    region: Joi.string().not().empty().required(),
    postalCode: Joi.string().trim().not().empty().required(),
  }),
};

exports.getUsersSchema = {
  query: Joi.object({
    q: Joi.string().min(1),
    sortBy: Joi.string().valid(
      "firstName",
      "lastName",
      "createdAt",
      "updatedAt"
    ),
    order: Joi.string().valid("ASC", "DESC"),
    offset: Joi.number().integer().min(0),
    limit: Joi.number().integer().min(1),
  }),
};

exports.patchBorrowerSchema = {
  body: Joi.object({
    firstName: Joi.string().trim().not().empty(),
    lastName: Joi.string().trim().not().empty(),
    email: Joi.string().email(),
    username: Joi.string().min(6),
    unitNumber: Joi.string().trim().not().empty(),
    streetNumber: Joi.string().not().empty(),
    addressLine1: Joi.string().not().empty(),
    addressLine2: Joi.string().not().empty(),
    city: Joi.string().not().empty(),
    region: Joi.string().not().empty(),
    postalCode: Joi.string().trim().not().empty(),
  }),
};
