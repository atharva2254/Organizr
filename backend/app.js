const express = require("express");
const app = express();
const cors = require("cors");
const app_route = require("./routes/app_route");
const user_route = require("./routes/user_route");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

app.use(
  cors({
    origin: "https://organizr-app.vercel.app/",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is Live");
});
app.use("/api/task", app_route);
app.use("/api/user", user_route);

module.exports = app;
