const { Op } = require("sequelize");
const Category = require("../../db/models/Category");

function listCategories({
  q,
  sortBy = "createdAt",
  order = "DESC",
  offset = 0,
  limit = 5,
} = {}) {
  return Category.findAndCountAll({
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
      categories: rows,
      meta: {
        total: count,
        offset,
        limit,
      },
    };
  });
}

module.exports = listCategories;
