const { Borrower } = require("../../db/models");
const { Op } = require("sequelize");

function listBorrowers({
  q,
  sortBy = "firstName",
  order = "DESC",
  offset = 0,
  limit = 5,
} = {}) {
  return Borrower.findAndCountAll({
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
    order: [[sortBy, order]],
    offset,
    limit,
  }).then(({ count, rows }) => {
    return {
      borrowers: rows,
      meta: {
        total: count,
        offset,
        limit,
      },
    };
  });
}

module.exports = listBorrowers;
