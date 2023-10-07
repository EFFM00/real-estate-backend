const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./api/users/user.router");
const propertyRouter = require("./api/properties/properties.router");

const app = express();

dotenv.config({path: ".env"})

app.use(express.json());

app.get("/", (req, res) => {
    res.send("HOLA")
})

app.use("/api/users", userRouter)
app.use("/api/properties", propertyRouter)


app.listen(process.env.APP_PORT, () => {
    console.log("Server listening on port " + process.env.APP_PORT);
})
