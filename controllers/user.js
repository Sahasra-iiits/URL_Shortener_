const User = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  return res.redirect("/");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user == null) {
    return res.render("login_signup", {
      toggle: 1,
      error: "Error Occured",
    });
  } else {
    const token = setUser(user);
    res.cookie("uid", token);
    return res.redirect("/");
  }
}
module.exports = {
  handleUserSignup,
  handleLogin,
};
