const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into Users(first_name, last_name, gender, email, password, number) values(?, ?, ?, ?, ?, ?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
            ],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result);
            }
        )
    },

    getUserById: (id, callback) => {
        pool.query(
            "SELECT id, first_name, last_name, gender, email, number FROM Users WHERE id = ?",
            [id],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            }
        )
    },

    getUserByEmail: (email, callback) => {
        pool.query(
            "SELECT id, first_name, last_name, gender, email, password, number FROM Users WHERE email = ?",
            [email],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            }
        )
    },


}