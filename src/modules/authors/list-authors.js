const { Op } = require("sequelize");
const { Author } = require("../../db/models");

function listAuthors({
  q,
  sortBy = "createdAt",
  order = "DESC",
  offset = 0,
  limit = 5,
} = {}) {
  return Author.findAndCountAll({
    where: {
      name: {
        [Op.iLike]: `%${q}%`,
      },
    },
    order: [[sortBy, order]],
    offset,
    limit,
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

module.exports = listAuthors;
