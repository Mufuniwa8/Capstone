function errorHandling(error, req, res, next) {
    if (error) {
        let status = error.status || 500;
        res.json({
            status, message: "This an error please try again"
        });
    }
    next();
}
module.exports = errorHandling