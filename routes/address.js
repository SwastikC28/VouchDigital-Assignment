const router = require("express").Router();
const {
  getAddress,
  getAddresses,
  createAddress,
  createAddresses,
  updateAddress,
  deleteAddress,
} = require("../controllers/address");

const { protect } = require("../middlewares/auth");

// Protecting Routes So That Only Authenticated Users Can Access It.
router.use(protect);

router.route("/").get(getAddresses).post(createAddress);
router.route("/:id").get(getAddress).put(updateAddress).delete(deleteAddress);
router.route("/many-address").post(createAddresses);

module.exports = router;
