const { getAllCategories } = require("./category.service");

module.exports = {
    getAllCategories: (_, res) => {
        getAllCategories((error, results) => {
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