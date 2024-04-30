const Joi = require("joi");

exports.postBookCopySchema= {
    body: Joi.object({
        bookId: Joi.number().integer().required(),
        countOfCopies: Joi.number().integer().required(),
    })
}

