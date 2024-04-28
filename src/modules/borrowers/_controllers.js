const express = require("express");
const addBorrower = require("./add-borrower");
const listBorrowers = require("./list-borrower");
const showBorrower = require("./show-borrower");
const editBorrower = require("./edit-borrower");
const removeBorrower = require("./remove-borrower");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function postBorrower(req, res) {
  addBorrower(req.body)
    .then((borrower) => {
      res.status(201).json({ borrower });
    })
    .catch((err) => {
      console.log("Error creating borrwer", err);
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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function patchBorrower(req, res, next) {
  return editBorrower(req.params.id, req.body)
    .then((borrower) => {
      if (!borrower) {
        res.status(404).json({ error: "Borrower is not found" });
      } else {
        res.json(borrower);
      }
    })
    .catch((err) => {
      next(err);
    });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function deleteBorrower(req, res, next) {
  return removeBorrower(req.params.id)
    .then((borrower) => {
      if (!borrower) {
        res.status(404).json({ error: "Borrower is not found" });
      } else {
        res.json(borrower);
      }
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postBorrower,
  getBorrowers,
  getBorrower,
  patchBorrower,
  deleteBorrower,
};
