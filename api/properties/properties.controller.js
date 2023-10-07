const { getAllProperties } = require("./properties.service");

module.exports = {
    getAllProperties: (req, res) => {
        getAllProperties((error, results) => {
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