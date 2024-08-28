const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controllers/productController");
const checkObjectId = require("../middlewares/checkObjectId");

router.route("/").get(getAllProducts);
router.route("/:id").get(checkObjectId, getProductById);

module.exports = router;
