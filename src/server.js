const express = require("express");
const bodyParser = require("body-parser");
var routes = require("./app/authorizeduser/route/authorizeduser.route");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(express.json());
app.use(routes);

const dbConfig = require("./app/config/database.config.js");
//MONGODB CONNECTION
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //indicate use promise
    console.log("DB is connected!");
  })
  .catch((err) => {
    console.log("DB is not connected...");
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "successfull!",
  });
});

//require("./app/authorizeduser/route/authorizeduser.route")(app);

app.listen(4100, () => {
  console.log("Server is working!");
});
