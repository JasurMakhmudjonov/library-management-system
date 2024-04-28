const hello = require("./hello");

function getHello(req, res) {
  const data = hello();

  res.json({ data });
}

module.exports = {
    getHello,
}

