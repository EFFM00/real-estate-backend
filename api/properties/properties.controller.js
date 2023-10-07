const { getAllProperties, getPropertyById } = require("./properties.service");

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
    },

    getPropertyById: (req, res) => {
        const id = req.params.id;
        getPropertyById(id, (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        if (!result) {
            return res.json({
            success: 0,
            message: "Property not found",
            });
        }
        return res.json({
            success: 1,
            data: result,
        });
        });
    },
}