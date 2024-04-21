const express = require("express");
const addBorrower = require("./add-borrower");
const listBorrowers = require("./list-borrower");
const showBorrower = require("./show-borrower");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
function postBorrower(req, res) {
  addBorrower(req.body).then((borrower) => {
    res.status(201).json({ borrower });
  });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getBorrowers(req, res) {
  return listBorrowers({ ...req.query }).then((data) => {
    res.json(data);
  });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getBorrower(req, res, next) {
  return showBorrower(req.params.id)
    .then((borrower) => {
      res.json({ borrower });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postBorrower,
  getBorrowers,
  getBorrower,
};
