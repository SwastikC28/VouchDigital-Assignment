const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

// @desc    Login With Email and Password
// @route   POST  /login
// @access  Private/Admin
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).select("+password");

  if (!email || !password) {
    return next(new ErrorResponse(`Please Provide Email and Password`, 401));
  }

  if (!user) {
    return next(new ErrorResponse(`Invalid Credentials`, 401));
  }

  const isMatch = user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse(`Invalid Credentials`, 401));
  }

  const token = user.getSignedJWTToken();

  res.status(200).json({ success: true, token });
});

// @desc    Register
// @route   POST  /signup
// @access  Private/Admin
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = { ...req.body };
  const user = await User.create({ name, email, role, password });
  const token = user.getSignedJWTToken();

  res
    .status(200)
    .json({ success: true, message: "Registration Successfully", token });
});
