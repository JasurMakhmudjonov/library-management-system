const Category = require("../../db/models/Category");
const { BadRequiestError } = require("../../shared/errors");

function addCategory(data) {
  const { parentId } = data;

  if (parentId) {
    return Category.findByPk(parentId).then((category) => {
      if (!category) {
        throw new BadRequiestError("Parent category is not found");
      }

      return Category.create(data)
        .then((category) => {
          return category;
        })
        .catch((err) => {
          console.log("Error creating category: ", err);
        });
    });
  }

  return Category.create(data)
    .then((category) => {
      return category;
    })
    .catch((err) => {
      console.log("Error creating category: ", err);
    });
}

module.exports = addCategory;


/**
 * return Category.create(data)
    .then((category) => {
      return category;
    })
    .catch((err) => {
      console.log("Error while creating : ", err);
    });
 */
