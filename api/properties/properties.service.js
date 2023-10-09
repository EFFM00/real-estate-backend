const pool = require("../../config/database");

module.exports = {
    getAllProperties: (callback) => {
        pool.query(
            "SELECT id, title, price, main_image, address FROM Properties",
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
            "SELECT id, title, price, main_image, description, address FROM Properties WHERE id = ?",
            [id],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            }
        )
    },

    getPropertiesByCategory: (category, callback) => {
        pool.query(
            "SELECT p.id, title, price, main_image, description, address, o.type AS operation, c.name AS city FROM Properties p INNER JOIN Operations o ON p.idOperation = o.id INNER JOIN Cities c ON p.idCity = c.id INNER JOIN Categories cat ON p.idCategory = cat.id WHERE cat.name = ?",
            [category],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            }
        )
    },

    getPropertiesByCity: (city, callback) => {
        pool.query(
            "SELECT p.id, title, price, main_image, description, address, o.type AS operation, cat.name AS category FROM Properties p INNER JOIN Operations o ON p.idOperation = o.id INNER JOIN Cities c ON p.idCity = c.id INNER JOIN Categories cat ON p.idCategory = cat.id WHERE c.name = ",
            [city],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            }
        )
    },

    getPropertiesByOperation: (operation, callback) => {
        pool.query(
            "SELECT p.id, title, price, main_image, description, address, c.name AS city, cat.name AS category FROM Properties p INNER JOIN Operations o ON p.idOperation = o.id INNER JOIN Cities c ON p.idCity = c.id INNER JOIN Categories cat ON p.idCategory = cat.id WHERE o.type =",
            [operation],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            }
        )
    },

} 