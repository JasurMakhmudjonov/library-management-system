const loginUser = require("./login-user");

function postLogin(req, res, next) {
  return loginUser(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  postLogin,
};
