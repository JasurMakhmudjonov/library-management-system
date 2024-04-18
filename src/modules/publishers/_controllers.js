const express = require("express");
const addPublisher = require("./add-publisher");
const listPublishers = require("./list-publishers");
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

module.exports = {
  postPublisher,
  getPublishers,
  getPublisher,
};
