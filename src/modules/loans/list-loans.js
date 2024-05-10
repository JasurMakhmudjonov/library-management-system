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
  ...filters
}) {
  return Loan.findAndCountAll({
    where: {
      ...filters,
    },
    order: [[sortBy, order]],
    offset,
    limit,
    include: [
      {
        model: Borrower,
        where: {
          [Op.or]: [
            {
              firstName: {
                [Op.iLike]: `%${q}%`,
              },
            },
            {
              lastName: {
                [Op.iLike]: `%${q}%`,
              },
            },
          ],
        },
      },
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
