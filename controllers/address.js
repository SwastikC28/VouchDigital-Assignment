const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("express-async-handler");
const Address = require("../models/Address");

// @desc    Get all Addresss
// @route   GET  /addresss
// @access  Private/Admin
exports.getAddresses = asyncHandler(async (req, res, next) => {
  let query = Address.find();

  // Adding Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  //Execute for pagination
  query = query.skip(startIndex).limit(limit);

  const result = await query;

  res
    .status(200)
    .json({ success: true, currPage: page, count: result.length, result });
});

// @desc    Get single Address
// @route   GET  /addresss/:id
// @access  Private/Admin
exports.getAddress = asyncHandler(async (req, res, next) => {
  const address = await Address.findById(req.params.id);
  console.log(address);
  res.status(200).json({ success: true, data: address });
});

// @desc    Create Address
// @route   POST  /addresss
// @access  Private/Admin
exports.createAddress = asyncHandler(async (req, res, next) => {
  const address = await Address.create(req.body);
  res.status(201).json({ success: true, data: address });
});

// @desc    Add Multiple Address
// @route   POST  /addresses
// @access  Private/Admin
exports.createAddresses = asyncHandler(async (req, res, next) => {
  const address = await Address.insertMany(req.body);
  res.status(201).json({ success: true, data: address });
});

// @desc    Update Address
// @route   PUT  /addresss/:id
// @access  Private/Admin
exports.updateAddress = asyncHandler(async (req, res, next) => {
  const address = await Address.findById(req.params.id);

  if (!address) {
    return next(`User with id ${req.params.id} not found`, 404);
  }

  const data = await Address.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data });
});

// @desc    Delete Address
// @route   DELETE  /addresss/:id
// @access  Private/Admin
exports.deleteAddress = asyncHandler(async (req, res, next) => {
  await Address.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, msg: "Deleted Successfully" });
});
