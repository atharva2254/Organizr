const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userexits = await User.findOne({ email });
    if (userexits) {
      return res.status(400).json({
        message: "User Already exists!",
        _id: userexits.id,
        username: userexits.username,
        email: userexits.email,
        token: generateToken(userexits._id),
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();

    return res.status(200).json({
      message: "User Created successfully",
    });
  } catch {
    return res.status(500).json({ message: "Server Error!" });
  }
};

const getall = async (req, res) => {
  const allUsers = await User.find();

  return res.status(200).json(allUsers);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials!" });

    const token = generateToken(user._id);
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "Lax", // or "None" for cross-site
        secure: true, // true in production with HTTPS
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .json({
        message: "Login successful",
        _id: user.id,
        username: user.username,
        email: user.email,
        token: "Generated ✅",
      });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error!" });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });
  res.status(200).json({ message: "Logged out successfully" });
};

const getMe = async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);

  return res.status(200).json({
    message: "Verified successfully",
    id: _id,
    username,
    email,
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "20d" });
};

module.exports = { createUser, getall, loginUser, getMe, logoutUser };
