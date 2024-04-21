const express = require("express");
const addPublisher = require("./add-publisher");
const listPublishers = require("./list-publishers");
const editPublisher = require("./edit-publisher");
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
 */

function patchPublisher(req, res, next) {
  return editPublisher(req.body).then((publisher) => {
    res._final.json({ publisher });
  });
}

module.exports = {
  postPublisher,
  getPublishers,
  getPublisher,
  patchPublisher,
};
