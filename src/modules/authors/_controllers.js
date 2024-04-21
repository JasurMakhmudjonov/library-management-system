const express = require("express");
const addAuthor = require("./add-author");
const listAuthors = require("./list-authors");

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
 */

function getAuthor(req, res, next) {
  return ShowAuthor(req.params.id)
    .then((author) => {
      res.json({ author });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postAuthor,
  getAuthors,
  getAuthor
};
