const { Publisher } = require("../../db/models");
const { Op } = require("sequelize");

function listPublishers({
  q="",
  sortBy = "createdAt",
  order = "DESC",
  offset = 0,
  limit = 5,
} = {}) {
  return Publisher.findAndCountAll({
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
      publishers: rows,
      meta: {
        total: count,
        offset,
        limit,
      },
    };
  });
}


module.exports = listPublishers;
