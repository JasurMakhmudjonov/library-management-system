const Joi = require("joi");

exports.postBookSchema = {
  body: Joi.object({
    title: Joi.string().trim().not().empty().required(),
    subtitle: Joi.string().trim().not().empty(),
    isbnNumber: Joi.number().integer().required(),
    pages: Joi.number().integer().positive().required(),
    lang: Joi.string().trim().not().empty().required(),
    translated: Joi.boolean(),
    prevLang: Joi.string().trim().not().empty(),
    yearPublished: Joi.number().integer().positive().required(),
    publisherId: Joi.number().integer().required(),
    categoryId: Joi.number().integer().required(),
    authorIds: Joi.array().items(Joi.number().integer()).min(1).required(),
    countOfCopies: Joi.number().integer().positive().required(),
  }),
};

exports.getBooksSchema = {
  query: Joi.object({
    q: Joi.string().min(1),
    sortBy: Joi.string().valid("title", "yearPublished", "pages"),
    order: Joi.string().valid("ASC", "DESC"),
    offset: Joi.number().integer().min(0),
    limit: Joi.number().integer().min(1),
    translated: Joi.boolean(),
    prevLang: Joi.string().trim(),
    yearPublished: Joi.number().integer().positive(),
  }),
};

exports.patchBookSchema = {
  body: Joi.object({
    title: Joi.string().trim().not().empty(),
    subtitle: Joi.string().trim().not().empty(),
    isbnNumber: Joi.number().integer(),
    pages: Joi.number().integer().positive(),
    lang: Joi.string().trim().not().empty(),
    translated: Joi.boolean(),
    prevLang: Joi.string().trim().not().empty(),
    yearPublished: Joi.number().integer().positive(),
    publisherId: Joi.number().integer(),
    categoryId: Joi.number().integer(),
    authorIds: Joi.array().items(Joi.number().integer()).min(1),
  }),
};
