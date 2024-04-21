const express = require("express");
const addBook = require("./add-book");
const { listBooks } = require("./list-books");


/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 *
 */

function postBook(req, res, next) {
  return addBook(req.body)
    .then((book) => {
      res.status(201).json({ book });
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
 *
 */

function getBooks(req, res, next) {
  return listBooks({ ...req.query })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
}

function getBook(req, res, next) {
  return ShowBook(req.params.id)
    .then((book) => {
      res.json({ book });
    })
    .catch((err) => {
      next(err);
    });

  }

module.exports = {
  postBook,
  getBooks,
  getBook
};