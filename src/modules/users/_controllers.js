const express = require("express");
const addUser = require("./add-user");
const listUsers = require("./list-user");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function postUser(req, res) {
  addUser(req.body).then((user) => {
    res.status(201).json({ user });
  });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getUsers(req, res) {
  return listUsers({ ...req.query }).then((data) => {
    res.json(data);
  });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getUser(req, res, next) {
  return ShowUser(req.params.id)
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postUser,
  getUsers,
  getUser,
};
