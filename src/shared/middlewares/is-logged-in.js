const express = require("express");
const { UnauthorizedError } = require("../errors");
const jwt = require("jsonwebtoken");
const config = require("../config");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function isLoggedIn(req, res, next) {
  const token = req.headers.authorization
  if (!token) {
    next(new UnauthorizedError("Unauthorized"));
    return;
  }

  try {
    const payload = jwt.verify(token, config.jwt.secret, {
      ignoreExpiration: false,
    });

    req.user = payload.user;

    next();
  } catch (error) {
    next(new UnauthorizedError("Unauthorized"));
  }
}

module.exports = isLoggedIn;
