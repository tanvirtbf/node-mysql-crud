const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

// configure dotenv
dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/test", (req, res) => {
  res.status(200).send("<h1>Nodejs Mysql APP</h1>");
});

// PORT
const PORT = process.env.PORT || 8000;

// conditionaly Listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    console.log("MySQl DB Connected");
    // listen
    app.listen(PORT, () => {
      console.log(`Server Running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
