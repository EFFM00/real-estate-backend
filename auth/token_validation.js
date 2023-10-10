const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token, process.env.KEY_JWT, (error, decoded) => {
                if(error) {
                    res.json({
                        success: 0,
                        message: "Invalid token"
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            })
        } else {
            res.json({
                success: 0,
                message: "Access denied: Unautorized user"
            })
        }
    }
}
