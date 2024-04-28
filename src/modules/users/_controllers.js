const express = require("express");
const addUser = require("./add-user");
const listUsers = require("./list-user");
const showUser = require("./show-user");
const editUser = require("./edit-user");
const removeUser = require("./remove-user")

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

function postUser(req, res) {
  addUser(req.body)
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
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
  return showUser(req.params.id)
    .then((user) => {
      res.json({ user });
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

function patchUser(req, res, next) {
  return editUser(req.params.id, req.body)
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "User is not found" });
      } else {
        res.json(user);
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

function deleteUser(req, res, next) {
  return removeUser(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "User is not found" });
      } else {
        res.json(user);
      }
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser,
};
