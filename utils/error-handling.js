function NotFoundErr(req, res, next) {
    return res.status(404).json({
        StatusCode: res.statusCode,
        message: `ROUTE ${req.url} NOT FOUND`
    });
}

function ErrorHandler(err, req, res, next) {
    console.log(err);
    return res.json({
        StatusCode: err.status || 500,
        error: {
            message: err.message || "Internal Server Error"
        }
    })
};

module.exports = {
    ErrorHandler,
    NotFoundErr
}