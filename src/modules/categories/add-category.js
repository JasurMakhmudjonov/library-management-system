const category = require("../../db/models/Category");

function addCategory(data) {
  return category.create(data)
    .then((createdCategory) => {
      return createdCategory;
    })
    .catch((err) => {
      console.log("Error creating category: ", err);
    });
}
module.exports = addCategory;
