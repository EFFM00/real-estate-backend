const { getAllCities } = require("./city.controller");
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.get("/", checkToken, getAllCities);

module.exports = router;