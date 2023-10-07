const { getAllProperties } = require("./properties.controller");
const router = require("express").Router();

router.get("/", getAllProperties);

module.exports = router;