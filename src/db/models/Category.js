const { Op } = require("sequelize");
const { Category } = require("../../db/models");

function listCategories({
  q = "",
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
    offset,
    limit,
    order: [[sortBy, order]],
    include: [{ model: Category, as: 'children' }] 
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
