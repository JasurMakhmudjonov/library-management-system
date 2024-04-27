class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
  }
}

class BadRequestError extends Error {
  constructor(msg) {
    super(msg);
  }
}

module.exports = {
  NotFoundError,
  BadRequestError,
};
