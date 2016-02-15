var express = require('express');
var jwt = require('jsonwebtoken');
var data = require('../database');
var apiRoutes = express.Router();

var getUser = function (body) {

    var user = null;
    data.users.forEach(function (element) {
        if (element.username === body.username) {
            console.log(JSON.stringify(body));
            return user = element;
        }
    });

    return user;
};

var authenticate = function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        var user = getUser(req.body);
        if (!user) {
            res.status(401).json({ success: false, message: "Authentication failed. User not found" });
        } else {
            if (user.password !== req.body.password) {
                res.status(401).json({ success: false, message: "Authentication failed. Wrong password" });
            } else {
                var newToken = jwt.sign({ name: user.name, password: user.password }, data.secrete, {
                    expires: 1440
                });

                res.status(200).json({
                    success: true,
                    message: 'Success',
                    token: newToken
                });
            }
        }
    } else {
        jwt.verify(token, data.secrete, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: "Token authentication failed" });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
};

module.exports = authenticate;