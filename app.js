const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./api/users/user.router");
const propertyRouter = require("./api/properties/properties.router");
const categoryRouter = require("./api/categories/category.router");
const cityRouter = require("./api/cities/city.router");
const operationRouter = require("./api/operations/operation.router");


const app = express();

dotenv.config({path: ".env"})

app.use(express.json());

app.use(cors());

const corsOptions = {
    origin: "https://miaplicacion.com",
    methods: "GET,POST",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.get("/", (_, res) => {
    res.send("API Real estates working")
})

app.use("/api/users", userRouter);
app.use("/api/properties", propertyRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/cities", cityRouter);
app.use("/api/operations", operationRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server listening on port " + process.env.APP_PORT);
})
