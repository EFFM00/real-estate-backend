const { getAllProperties, getPropertyById, getPropertiesByCategory, getPropertiesByCity, getPropertiesByOperation } = require("./properties.service");

module.exports = {
    getAllProperties: (_, res) => {
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
        const id = parseInt(req.params.id);
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

    getPropertiesByCategory: (req, res) => {
        const category = req.params.category;
        getPropertiesByCategory(category, (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        if (!result) {
            return res.json({
            success: 0,
            message: "Category not found",
            });
        }
        return res.json({
            success: 1,
            data: result,
        });
        });
    },
    
    getPropertiesByCity: (req, res) => {
        const city = req.params.city;
        getPropertiesByCity(city, (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        if (!result) {
            return res.json({
            success: 0,
            message: "City not found",
            });
        }
        return res.json({
            success: 1,
            data: result,
        });
        });
    },

    getPropertiesByOperation: (req, res) => {
        const operation = req.params.operation;
        getPropertiesByOperation(operation, (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        if (!result) {
            return res.json({
            success: 0,
            message: "Operation not found",
            });
        }
        return res.json({
            success: 1,
            data: result,
        });
        });
    },
}