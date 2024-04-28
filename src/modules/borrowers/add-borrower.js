const Borrower = require("../../db/models/Borrower");

function addBorrower(data) {
  return Borrower.create(data)
    .then((borrower) => {
      return borrower;
    })
    .catch((err) => {
      console.log("Error creating borrower: ", err);
    });
}

module.exports = addBorrower;
