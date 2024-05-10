const { Op } = require("sequelize");
const BookCopy = require("../../db/models/BookCopy");
const Borrower = require("../../db/models/Borrower");
const Loan = require("../../db/models/Loan");
const { BadRequestError } = require("../../shared/errors");

function addLoan(data) {
  const { borrowerId, bookCopyId } = data;

  return Promise.all([
    Borrower.findByPk(borrowerId),
    BookCopy.findByPk(bookCopyId),
    Loan.findOne({ where: { bookCopyId, status: { [Op.ne]: "closed" } } }),
    Loan.findOne({ where: { borrowerId, status: { [Op.ne]: "closed" } } }),
  ])
    .then(([borrower, bookCopy, bookCopyInaccessible, borrowerBlocked]) => {
      if (!borrower) {
        throw new BadRequestError("Borrower is not found");
      }

      if (borrowerBlocked) {
        throw new BadRequestError("Borrower is blocked");
      }

      if (!bookCopy) {
        throw new BadRequestError("BookCopy is not found");
      }

      if (bookCopyInaccessible) {
        throw new BadRequestError("BookCopy is inaccessible");
      }

      return Loan.create({ ...data, dateBorrowed: new Date() }).then((loan) => {
        return loan;
      });
    })
    .catch((err) => {
      console.log("Error creating loan: ", err);
      throw err;
    });
}

module.exports = addLoan;
