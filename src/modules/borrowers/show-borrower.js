const { NotFoundError } = require("../../shared/errors");
const { Borrower } = require("../../db/models");


function showBorrower() {
  return Borrower.findByPk(id).then((borrower) => {
    if (!borrower) {
      throw new NotFoundError("Borrower is not found");
    }
    return borrower;
  });
}

module.exports = showBorrower;
