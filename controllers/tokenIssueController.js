const jwt = require('jsonwebtoken');

//create token

exports.tokenIssue = async (req, res) => {
    try {
        let payLoad = {
            "name": "Bellal Hossain",
            "email": "bellal@gmail.com",
            "password": "123456"
        }

        let token = jwt.sign({payLoad}, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.status(200).json({message: " Token create Success", token: token});

    } catch (err) {
        return res.status(401).json({message: " Invalid Token System", data: err});
    }
}

