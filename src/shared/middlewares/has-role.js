const hasRole =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(401).json({ error: "role not permitted" });
    }
    next();
  };
module.exports = hasRole;
