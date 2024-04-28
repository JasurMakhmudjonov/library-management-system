const addBookCopies = require("./add-book-copy");
const showBookCopy = require("./show-book-copy");

function postBookCopy(req, res, next) {
  return addBookCopies(req.body)
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch(next);
}

function getBookCopy(req, res, next) {
  return showBookCopy(req.params.id)
    .then((bookCopy) => {
      res.json({ bookCopy });
    })
    .catch(next);
}

module.exports = {
  postBookCopy,
  getBookCopy,
};
