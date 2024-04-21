const Category = require("../../db/models/Category");
const { NotFoundError } = require("../../shared/errors");

function editCategory(id, data) {
  return Category.findByPk(id).then((category) => {
    if (!category) {
      throw new NotFoundError("Category is not found");
    }

    return category.update(data).then((updated) => {
      return updated;
    });
  });
}

module.exports = editCategory;
