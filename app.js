const express = require("express");
const dotenv = require("dotenv");

const app = express()

dotenv.config({path: ".env"})

app.get("/", (req, res) => {
    res.send("HOLA")
})

app.listen(process.env.APP_PORT, () => {
    console.log("Server listening on port " + process.env.APP_PORT);
})
