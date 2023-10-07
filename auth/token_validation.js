const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            const keyJwt = "50?G£7vgFv<y<1je:5)nH4^&Ug|4(I!{@24)";
            verify(token, process.env.KEY_JWT ?? keyJwt, (error, decoded) => {
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
