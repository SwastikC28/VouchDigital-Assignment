const router = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const { protect, authorize } = require("../middlewares/auth");

// Protecting Routes
router.use(protect);

// Authorizing So That Only Admins Can Use this Route
router.use(authorize("admin"));

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
