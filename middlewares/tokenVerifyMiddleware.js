const jwt = require('jsonwebtoken');

exports.tokenVerify = async (req, res, next) => {
    try {
        let tokenKey = req.headers['token-key'];
        let tokenVerify = jwt.verify(tokenKey, process.env.JWT_SECRET);
        next();
  

    } catch (err) {
        res.status(401).json({msg: "Token verify failed", data: err});
    }
}