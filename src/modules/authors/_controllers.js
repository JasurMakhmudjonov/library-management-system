const express = require("express");
const addAuthor = require("./add-author");
const listAuthors = require("./list-authors");
const ShowAuthor = require("./show-author");
const editAuthor = require("./edit-author");
const removeAuhor = require("./remove-author");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function postAuthor(req, res) {
  addAuthor(req.body).then((author) => {
    res.status(201).json({ author });
  });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getAuthors(req, res) {
  return listAuthors({ ...req.query }).then((data) => {
    res.json(data);
  });
}


/**
 * 
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function getAuthor(req, res, next) {
  ShowAuthor(req.params.id)
    .then((author) => {
      if (!author) {
        res.status(404).json({ error: "Author not found" });
      } else {
        res.json({ author });
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

function patchAuthor(req, res, next) {
  return editAuthor(req.params.id, req.body)
    .then((author) => {
      if (!author) {
        res.status(404).json({ error: "Author is not found" });
      } else {
        res.json(author);
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

function deleteAuhor(req, res, next) {
  return removeAuhor(req.params.id)
    .then((author) => {
      if (!author) {
        res.status(404).json({ error: "Author is not found" });
      } else {
        res.json(author);
      }
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postAuthor,
  getAuthors,
  getAuthor,
  patchAuthor,
  deleteAuhor,
};
