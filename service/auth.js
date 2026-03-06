const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET_KEY;

function setUser(user) {
  const token = jwt.sign(
    {
      email: user.email,
      password: user.password,
      role: user.role,
    },
    secret,
  );
  return token;
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser,
};
