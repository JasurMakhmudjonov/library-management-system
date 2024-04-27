const express = require("express");
const addPublisher = require("./add-publisher");
const listPublishers = require("./list-publishers");
const editPublisher = require("./edit-publisher");
const ShowPublisher = require("./show-publisher");
const removePublisher = require("./remove-publisher");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
function postPublisher(req, res) {
  addPublisher(req.body).then((publisher) => {
    res.status(201).json({ publisher });
  });
}
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getPublishers(req, res) {
  return listPublishers({ ...req.query }).then((data) => {
    res.json(data);
  });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 *  @param {express.NextFunction} next
 */

function getPublisher(req, res, next) {
  return ShowPublisher(req.params.id)
    .then((publisher) => {
      res.json({ publisher });
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

function patchPublisher(req, res, next) {
  const { id } = req.params; 
  const data = req.body; 

  return editPublisher(id, data) 
    .then((publisher) => {
      res.json({ publisher });
    })
    .catch((err) => {
      next(err);
    });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 *  @param {express.NextFunction} next
 */

function deletePublisher(req, res, next) {
  return removePublisher(req.params.id)
    .then((publisher) => {
      if (!publisher) {
        res.status(404).json({ error: "Publisher is not found" });
      } else {
        res.json(publisher);
      }
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postPublisher,
  getPublishers,
  getPublisher,
  patchPublisher,
  deletePublisher,
};
