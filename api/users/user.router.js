const {createUser, getUserById, login} = require("./user.controller");
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.post("/", createUser)
router.get("/:id", checkToken, getUserById)
router.post("/login", login)


module.exports = router;
