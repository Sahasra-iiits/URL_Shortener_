const express = require("express");
const { connectToMongoDB } = require("./connection");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//importing routers
const urlRouter = require("./routes/url_router");
const userRouter = require("./routes/user");
const { checkLogin, checkAuth, restrictTo } = require("./middlewares/auth");
const staticRouter = require("./routes/staticRouter");

const app = express();
const PORT = process.env.PORT;

connectToMongoDB(process.env.MONGO_URL)
  .then(() => console.log("MondoDB Connected!"))
  .catch((err) => console.log("Error Occured."));

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public")); //To access public folder images

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Using routes
app.use("/", checkAuth, staticRouter);
app.use("/urls", checkLogin, restrictTo(["NORMAL"]), urlRouter);
app.use("/user", userRouter);

app.listen(PORT, (req, res) => {
  console.log("Server Started!");
});
