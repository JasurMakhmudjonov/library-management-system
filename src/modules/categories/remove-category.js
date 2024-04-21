const Category = require("../../db/models/Category");
const { NotFoundError } = require("../../shared/errors");

function removeCategory(id) {
  return Category.findByPk(id).then((category) => {
    if (!category) {
      throw new NotFoundError("Category is not found");
    }

    return category.destroy().then(() => {
      category;
    });
  });
}

module.exports = removeCategory;