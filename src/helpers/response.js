class ApiResponse {
    static success(res,message, data, status = 200){
        return res.status(status).json({
            meta: {
                status: status,
                message: message,
            },
            data: data,
            error: null,
        });
    }
    static error(res, message, error = null, status = 500) {
        res.status(status).json({
            meta: {
                status,
                message: message ? message : "Internal server error"
            },
            data,
            error: null
        });
    }
    static notFound(res, message = "Resource not found", status = 404) {
        res.status(status).json({
            meta: {
                status,
                message: message ? message : "Resource not found"
            },
            data: null,
            error: null
        });
    }
}

export default ApiResponse;