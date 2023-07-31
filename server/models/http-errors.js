// class for handling http errors (receive message and error code)
class HttpError extends Error {
    constructor(message, errorCode){
        super(message);
        this.code = errorCode;
    }
}

module.exports = HttpError;