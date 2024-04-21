const { Author } = require("../../db/models");

function addAuthor(data) {
  return Author.create(data)
    .then((author) => {
      return author;
    })
    .catch((err) => {
      console.log("Error creating author: ", err);
    });
}

module.exports = addAuthor;