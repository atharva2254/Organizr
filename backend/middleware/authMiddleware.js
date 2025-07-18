const jwt = require("jsonwebtoken");
const User = require("../model/user");

const protect = async (req, res, next) => {
  const token = req.cookies.token;

  try {
    //Verify Token:
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token:
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Authorization failed" });
  }

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};

module.exports = protect;
