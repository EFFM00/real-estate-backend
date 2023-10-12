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
            "SELECT p.id, p.title, p.price, p.main_image, p.description, p.address, o.type AS operation FROM Properties p INNER JOIN Operations o ON p.id_operation = o.id INNER JOIN Cities WHERE p.id = ?",
            [id],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            }
        )
    },

    getImagesByPropertyId: (id, callback) => {
        pool.query(
            "SELECT i.id, i.url_image, i.description FROM Images i INNER JOIN Properties p ON i.id_property = p.id WHERE p.id = ?",
            [id],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result);
            }
        )
    },

    getPropertiesByCategory: (category, callback) => {
        pool.query(
            "SELECT p.id, title, price, main_image, description, address, o.type AS operation, c.name AS city FROM Properties p INNER JOIN Operations o ON p.id_operation = o.id INNER JOIN Cities c ON p.id_city = c.id INNER JOIN Categories cat ON p.id_category = cat.id WHERE cat.name = ?",
            [category],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result);
            }
        )
    },

    getPropertiesByCity: (city, callback) => {
        pool.query(
            "SELECT p.id, title, price, main_image, description, address, o.type AS operation, cat.name AS category FROM Properties p INNER JOIN Operations o ON p.id_operation = o.id INNER JOIN Cities c ON p.id_city = c.id INNER JOIN Categories cat ON p.id_category = cat.id WHERE c.name = ?",
            [city],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result);
            }
        )
    },

    getPropertiesByOperation: (operation, callback) => {
        pool.query(
            "SELECT p.id, title, price, main_image, description, address, c.name AS city, cat.name AS category FROM Properties p INNER JOIN Operations o ON p.id_operation = o.id INNER JOIN Cities c ON p.id_city = c.id INNER JOIN Categories cat ON p.id_category = cat.id WHERE o.type = ?",
            [operation],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result);
            }
        )
    },

} 