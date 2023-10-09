const pool = require("../../config/database");

module.exports = {

    getAllOperations: (callback) => {
        pool.query(
            "SELECT id,type FROM Operations",
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