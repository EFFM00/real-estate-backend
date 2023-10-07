const { getAllProperties,getPropertyById } = require("./properties.controller");
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.get("/", checkToken, getAllProperties);
router.get("/:id", checkToken, getPropertyById);

module.exports = router;