const {createPool} = require("mysql");

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST ?? "localhost",
    user: process.env.DB_USER ?? "root",
    password: process.env.DB_PASS ?? "root",
    database: process.env.MYSQL_DB ?? "realestatedb",
    connectionLimit: 10
})

module.exports = pool;