const { genSaltSync, hashSync } = require("bcryptjs");
const {create, getUserById} = require("./user.service");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (error, result) => {
            if(error) {
                console.error(error);
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
    },
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (error, result) => {
            if(error) {
                console.error(error);
                return;
            }
            if(!result) {
                return res.json({
                    success: 0,
                    message: "User not found"
                })
            }
            return res.json({
                success: 1,
                data: result
            })
        })
    }
}