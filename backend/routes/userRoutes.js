const express = require("express");
const router = express.Router();

const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const { protect, admin } = require("../middlewares/authMiddleware");

// User Routes
router.route("/login").post(authUser);
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/logout").post(logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser);

module.exports = router;
