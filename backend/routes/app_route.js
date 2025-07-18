const express = require("express");
const router = express.Router();
const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/main");
const protect = require("../middleware/authMiddleware");

router.route("/").get(protect, getTask).post(protect, createTask);
router.route("/:id").put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
