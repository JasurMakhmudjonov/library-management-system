
// 404
class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
  }
}

//400
class BadRequestError extends Error {
  constructor(msg) {
    super(msg);
  }
}
//401
class UnauthorizedError extends Error {
  constructor(msg) {
    super(msg);
  }
}

// 403

class ForbiddenError extends Error {
  constructor(msg) {
    super(msg);
  }
}

module.exports = {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
};




