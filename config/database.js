const {createPool} = require("mysql");

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST ?? "sql10.freesqldatabase.com",
    user: process.env.DB_USER ?? "sql10651663",
    password: process.env.DB_PASS ?? "syGSnVNgUg",
    database: process.env.MYSQL_DB ?? "sql10651663",
    connectionLimit: 10
})

module.exports = pool;