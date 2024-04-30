const { Op } = require("sequelize");
const { Loan, Borrower } = require("../../db/models");
const BookCopy = require("../../db/models/BookCopy");
const Publisher = require("../../db/models/Publisher");
const Book = require("../../db/models/Book");

function listLoans({
  q = "",
  sortBy = "dateBorrowed",
  order = "DESC",
  offset = 0,
  limit = 5,
}) {
  return Loan.findAndCountAll({
    where: {
      dueDate: {
        [Op.iLike]: `%${q}%`,
      },
    },
    order: [[sortBy, order]],
    offset,
    limit,
    include: [
      Borrower,
      {
        model: BookCopy,
        include: {
          model: Book,
          include: [Publisher],
        },
      },
    ],
  }).then(({ count, rows }) => {
    return {
      authors: rows,
      meta: {
        total: count,
        offset,
        limit,
      },
    };
  });
}

module.exports = listLoans;
