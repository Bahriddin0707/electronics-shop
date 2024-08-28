const Product = require("../models/productModel");
const asyncHandler = require("../middlewares/asyncHandler");

// @description    Create New Order
// @route         GET /api/orders
// @access       Private/Admin
const createOrder = asyncHandler(async (req, res) => {
  const newOrder = await Product.create({});

  res.status(200).json(allProducts);
});
