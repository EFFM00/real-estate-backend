const pool = require("../../config/database");

module.exports = {
    getAllProperties: callback => {
        pool.query(
            "SELECT id, title, price, urlImage, address FROM properties",
            [],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result)
            },
        )
    }
} 