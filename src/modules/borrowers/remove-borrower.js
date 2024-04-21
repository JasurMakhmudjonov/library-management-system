const { Borrower } = require("../../db/models");
const { NotFoundError } = require("../../shared/errors");

function removeBorrower(id, data) {
  return Borrower.findByPk(id).then((borrower) => {
    if (!borrower) {
      throw new NotFoundError("Borrower is not found");
    }

    return borrower.update(data).then((updated) => {
      return updated;
    });
  });
}

module.exports = removeBorrower;
