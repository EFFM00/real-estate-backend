const pool = require("../../config/database");

module.exports = {

    getAllCities: (callback) => {
        pool.query(
            "SELECT id,name FROM Cities",
            [],
            (error, result) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, result)
            }
            )
        
    }

}