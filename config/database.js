const {createPool} = require("mysql");

const pool = createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "rentalestate",
    connectionLimit: 10
})