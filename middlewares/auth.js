const { getUser } = require("../service/auth");

function checkLogin(req, res, next) {
  const id = req.cookies?.uid;

  if (!id) {
    return res.render("login");
  }

  const user = getUser(id);

  if (!user) {
    return res.render("login");
  }

  req.user = user;
  next();
}

function checkAuth(req, res, next) {
  const id = req.cookies?.uid;

  const user = getUser(id);

  req.user = user;
  next();
}

function restrictTo(roles) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");
    if (!roles.includes(req.user.role)) return res.end("error: Unauthorised");
    return next();
  };
}
module.exports = {
  checkLogin,
  checkAuth,
  restrictTo,
};
