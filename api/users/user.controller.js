const { genSaltSync, hashSync, compareSync } = require("bcryptjs");
const { create, getUserById, getUserByEmail } = require("./user.service");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        getUserByEmail(body.email, (error, results) => {
            if(error) {
                console.log(error);
            }
            if(!results) {
                create(body, (error, result) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).json({
                        success: 0,
                        message: "Database connection error",
                        });
                    }
            
                    return res.status(200).json({
                        success: 1,
                        data: result,
                    });
                    }
                );
            } else {
                return res.json({
                    success: 0,
                    data: "Email is already in use"
                });
            }
        })


    },
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        if (!result) {
            return res.json({
            success: 0,
            message: "User not found",
            });
        }
        return res.json({
            success: 1,
            data: result,
        });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (error, results) => {
            if(error) {
                console.error(error);
            }
            if(!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if(result) {
                results.password = undefined;
                const keyJwt = "50?G£7vgFv<y<1je:5)nH4^&Ug|4(I!{@24)"
                const jwt = sign(
                    { result: results },
                    process.env.KEY_JWT ?? keyJwt,
                    {
                        expiresIn: "1h",
                    });
                return res.json({
                    success: 1,
                    message: "Login succesfully",
                    token: jwt
                });
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password",
                });
            }
        });
    }
};
