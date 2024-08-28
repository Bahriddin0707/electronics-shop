const Product = require("../models/productModel");
const asyncHandler = require("../middlewares/asyncHandler");

// @description  Fetch All Products
// @route   GET /api/products
// @access  Public
const getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find({});

  res.status(200).json(allProducts);
});

// @description  Fetch a products by id
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

module.exports = { getAllProducts, getProductById };
