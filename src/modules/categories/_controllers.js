const express = require("express");
const addCategory = require("./add-category");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function postCategory(req, res) {
  addCategory(req.body).then((category) => {
    res.status(201).json(category);
  });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getCategories(req, res) {
  return (listCategories = { ...req.query }.then((data) => {
    res.json(data);
  }));
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getCategory(req, res, next) {
  return ShowCategory(req.params.id)
    .then((category) => {
      res.json({ category });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postCategory,
  getCategories,
  getCategory
};
