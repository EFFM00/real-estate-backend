const {createUser, getUserById, login} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser)
router.get("/:id", getUserById)
router.post("/login", login)


module.exports = router;
