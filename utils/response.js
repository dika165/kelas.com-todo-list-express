const success = (res, message, data, status = 200) => {
    return res.status(status).json({
        code: status,
        message: message,
        data: data
    });
};

const errorResp = (res, message, status = 400) => {
    return res.status(status).json({
        code: status,
        message: message
    });
};

const response = (code, message, data) => {
    const resp = {code, message, data};
    resp.code = code;
    resp.message = message;
    resp.data = data;
    return resp;


    // return {
    //     code: code,
    //     message: message, 
    //     data: data
    // }
}

export { response, success, error } ;