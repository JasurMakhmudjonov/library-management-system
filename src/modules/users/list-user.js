const { User } = require("../../db/models");
const { Op } = require("sequelize");

function listUsers({
  q,
  sortBy = "firstName",
  order = "DESC",
  offset = 0,
  limit = 5,
} = {}) {
  return User.findAndCountAll({
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
      users: rows,
      meta: {
        total: count,
        offset,
        limit,
      },
    };
  });
}

module.exports = listUsers;
