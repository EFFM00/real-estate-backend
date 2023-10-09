const { getAllOperations } = require("./operation.service");

module.exports = {
    getAllOperations: (_, res) => {
        getAllOperations((error, results) => {
            if(error) {
                console.error(error);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    }
}