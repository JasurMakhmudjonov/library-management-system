const { Op } = require("sequelize");
const { Book, Publisher } = require("../../db/models");

function listBooks({
  q = "",
  sortBy = "createdAt",
  order = "DESC",
  offset = 0,
  limit = 20,
}) {
  return Book.findAndCountAll({
    where: {
      title: {
        [Op.iLike]: `%${q}%`,
      },
    },
    limit,
    offset,
    order: [[sortBy, order]],
    include: [Publisher],
  }).then(({ count, rows }) => {
    return {
      books: rows,
      meta: {
        total: count,
        offset,
        limit,
      },
    };
  });
}

module.exports = listBooks;
