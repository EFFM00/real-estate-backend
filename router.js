const express = require('express');
const userRouter = require("./api/users/user.router");
const propertyRouter = require("./api/properties/properties.router");
const categoryRouter = require("./api/categories/category.router");
const cityRouter = require("./api/cities/city.router");
const operationRouter = require("./api/operations/operation.router");
const router = express.Router();

router.use("/users", userRouter);
router.use("/properties", propertyRouter);
router.use("/categories", categoryRouter);
router.use("/cities", cityRouter);
router.use("/operations", operationRouter);

module.exports = router;