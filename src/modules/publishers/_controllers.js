const express = require("express");
const addPublisher = require("./add-publisher");
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

module.exports = {
  postPublisher,
};
