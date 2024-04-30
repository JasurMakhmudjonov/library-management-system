const addLoan = require("./add-loan");
const listLoans = require("./list-loans");
const returnLoan = require("./return-loans");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 *
 */

function postLoan(req, res, next) {
  return addLoan(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 *
 */

function postReturnLoan(req, res, next) {
  return returnLoan(req.param.id).then((loan) => {
    res.json({ loan });
  });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 *
 */

function getLoans(req, res, next) {
  return listLoans({ ...req.query })
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

module.exports = {
  postLoan,
  postReturnLoan,
  getLoans,
};
