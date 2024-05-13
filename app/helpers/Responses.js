exports.responseWithData = async (res, code, status, message, data) => {
    return await res.status(code).json({
        code: code,
        status: status,
        message: message,
        data: data
    });
}

exports.responseWithoutData = async (res, code, status, message) => {
    return await res.status(code).json({
        code: code,
        status: status,
        message: message
    });
}

exports.responseWithError = async (res, code, status, message, error) => {
    console.log("===== DEBUG RESPONSE ERROR =====");
    console.log(error);
    console.log("===== END DEBUG RESPONSE ERROR =====");
    return await res.status(code).json({
        code: code,
        status: status,
        message: message,
        errors: error
    }); 
}