const pool = require("../../config/database");

module.exports = {
    getAllProperties: (callback) => {
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
    },

    getPropertyById: (id, callback) => {
        pool.query(
            "SELECT id, title, price, urlImage, description, address FROM properties WHERE id = ?",
            [id],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            }
        )
    },
} 