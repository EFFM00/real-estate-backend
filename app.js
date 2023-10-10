const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sanitizer = require('req-sanitizer');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json');
const router = require("./router");

const app = express();

dotenv.config({path: ".env"})

app.use(express.json());
app.use(sanitizer());
app.use(cors());

const corsOptions = {
    // origin: "https://real-estate-cl7z.onrender.com",
    origin: "http://localhost:5173/",
    methods: "GET,POST",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/api", router)

app.get("/", (_, res) => {
    res.send("API Real estates working")
})

app.listen(process.env.APP_PORT, () => {
    console.log("Server listening on port " + process.env.APP_PORT);
})