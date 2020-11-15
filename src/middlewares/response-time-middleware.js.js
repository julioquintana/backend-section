var requestTime = function(req, res, next) {
    res.responseTime = Date.now();
    next();
};

module.exports = requestTime;