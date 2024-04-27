const { Op } = require("sequelize");
const { Book, Publisher } = require("../../db/models");
const Category = require("../../db/models/Category");

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
    include: [
      {
        model: Publisher,
        attributes: ["id", "name"],
      },
      {
        model: Category,
        attributes: ["id", "name"],
      },
    ],
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
