const { getAllProperties,getPropertyById } = require("./properties.controller");
const router = require("express").Router();

router.get("/", getAllProperties);
router.get("/:id", getPropertyById);

module.exports = router;