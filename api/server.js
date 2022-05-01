const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./src/models/User");
const Fav = require("./src/models/Fav");

const withAuth = require("./src/middleware/middleware");
const {
  authenticate,
  FacebookLogin,
  logout,
  internalServerError,
  logger,
  getUserDetails,
} = require("./src/handlers/handlers");

const mongo_uri = process.env.MONGODB_URI;
const PORT = process.env.PORT;
console.log(process.env.MONGODB_URI);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger);

if (process.env.NODE_ENV != "test") {
  mongoose.connect(mongo_uri, { useNewUrlParser: true }, function (err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${mongo_uri}`);
    }
  });
}

const server = app.listen(PORT, () => {
  console.log("listening on", PORT);
});

app.get("/healthcheck", (req, res) => res.send({ status: "UP" }).status(200));
app.post("/api/signup", function (req, res) {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  user.save(function (err) {
    if (err) {
      internalServerError(res, "Error registering new user");
    } else {
      res.status(200).send("Registration successful");
    }
  });
});
app.get("/api/getFav", async function (req, res) {
  let email = req.query.email;
  if (!email) {
    res.status(410).send("send email");
  }
  const data = await Fav.find({ email: email });
  res.status(200).send(data);
});

app.post("/api/addFav/", function (req, res) {
  const { name, email, url } = req.body;
  const fav = new Fav({ name, email, url });
  fav.save(function (err) {
    if (err) {
      console.log(err);
      internalServerError(res, "Can''t added to favourite");
    } else {
      res.status(200).send("added to favourite");
    }
  });
});

app.post("/api/authenticate", getUserDetails.bind(null, null), authenticate);
app.post("/api/facebookLogin", FacebookLogin);
app.post("/api/logout", logout);
app.get("/checkToken", withAuth, function (req, res) {
  res.sendStatus(200);
});

module.exports = { app, server };
