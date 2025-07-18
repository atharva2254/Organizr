const app = require("./app");
const mongoose = require("mongoose");

const mongooseUrl = process.env.MONGO_URL;

mongoose.connect(mongooseUrl).then(() => {
  app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
});
