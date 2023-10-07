const { genSaltSync, hashSync } = require("bcryptjs");
const {create} = require("./user.service");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (error, result) => {
            if(error) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                });
            }

            return res.status(200).json({
                success: 1,
                data: result
            })
        })
    }
}