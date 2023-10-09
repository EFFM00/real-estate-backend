const { getAllCities } = require("./city.service");

module.exports = {
    getAllCities: (_, res) => {
        getAllCities((error, results) => {
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