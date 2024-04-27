const express = require("express");
const addCategory = require("./add-category");
const listCategories = require("./list-categories");
const ShowCategory = require("./show-category");
const editCategory = require("./edit-category");
const removeCategory = require("./remove-category");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 *
 */

function postCategory(req, res, next) {
  addCategory(req.body)
    .then((category) => {
      res.status(201).json({ category });
    })
    .catch((err) => {
      next(err);
    });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getCategories(req, res) {
  return listCategories({ ...req.query })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error("Error fetching categories:", err);
    });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function patchCategory(req, res, next) {
  return editCategory(req.params.id, req.body)
    .then((category) => {
      if (!category) {
        res.status(404).json({ error: "Category is not found" });
      } else {
        res.json(category);
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

function deleteCategory(req, res, next) {
  return removeCategory(req.params.id)
    .then((category) => {
      if (!category) {
        res.status(404).json({ error: "Category is not found" });
      } else {
        res.json(category);
      }
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postCategory,
  getCategories,
  getCategory,
  patchCategory,
  deleteCategory,
};
