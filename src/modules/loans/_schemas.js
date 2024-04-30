const Joi = require("joi");

 exports.postLoanSchema = {
    body: Joi.object( {
        borrowerId: Joi.number().integer().required(),
        bookCopyId: Joi.number().integer().required(),
        dueDate: Joi.date().required(),
    })
 }

 exports.getLoansSchema = {
    query: Joi.object({
  
      q: Joi.string().min(1),
      sortBy: Joi.string().valid("dateBorrowed", "createdAt", "updatedAt"),
      order: Joi.string().valid("ASC", "DESC"),
      offset: Joi.number().integer().min(0),
      limit: Joi.number().integer().min(1),
    }),
  };

 

