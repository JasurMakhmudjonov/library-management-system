const Category = require("../../db/models/Category");
const { NotFoundError } = require("../../shared/errors");

function showCategory() {
  return Category.findByPk(id).then((category) => {
    if (!category) {
      throw new NotFoundError("Category is not found");
    }

    return category;
  });
}

module.exports = showCategory;

