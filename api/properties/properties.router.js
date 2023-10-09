const { getAllProperties,getPropertyById, getPropertiesByCategory, getPropertiesByCity, getPropertiesByOperation } = require("./properties.controller");
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.get("/", checkToken, getAllProperties);
router.get("/:id", checkToken, getPropertyById);
router.get("/get_by_category/:category", checkToken, getPropertiesByCategory);
router.get("/get_by_city/:city", checkToken, getPropertiesByCity);
router.get("/get_by_operation/:operation", checkToken, getPropertiesByOperation);

module.exports = router;