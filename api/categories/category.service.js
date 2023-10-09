const pool = require("../../config/database");

module.exports = {

    getAllCategories: (callback) => {
        pool.query(
            "SELECT id,name FROM Categories",
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