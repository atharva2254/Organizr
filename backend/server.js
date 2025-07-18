const app = require("./app");
const mongoose = require("mongoose");

const mongooseUrl = process.env.MONGO_URL;

mongoose.connect(mongooseUrl).then(() => {
  app.listen(3000);
});
