const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");
const { getAllOperations } = require("./operation.controller");

router.get("/", checkToken, getAllOperations);

module.exports = router;