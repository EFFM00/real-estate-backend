const express = require("express");
const dotenv = require("dotenv");
const cookieParse = require("cookie-parser");

const app = express()

app.set("view engine", "ejs")

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

dotenv.config({path: "./env/.env"})

app.use(cookieParse)

app.get("/", (req, res) => {
    res.send("HOLA")
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})
