const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number) values(?, ?, ?, ?, ?, ?)`,
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

    // getUsers: callback => {
    //     pool.query(
    //         "SELECT id, firstName, lastName, gender, email, number FROM registration",
    //         [],
    //         (error, result) => {
    //             if(error) {
    //                 return callback(error);
    //             }
    //             return callback(null, result);
    //         }
    //     )
    // },

    getUserById: (id, callback) => {
        pool.query(
            "SELECT id, firstName, lastName, gender, email, number FROM registration WHERE id = ?",
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
            "SELECT id, firstName, lastName, gender, email, password, number FROM registration WHERE email = ?",
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