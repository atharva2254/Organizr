const express = require("express");
const router = express.Router();
const {
  createUser,
  getall,
  loginUser,
  getMe,
  logoutUser,
} = require("../controller/user");
const protect = require("../middleware/authMiddleware");

router.route("/").get(getall).post(createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", protect, getMe);

module.exports = router;
