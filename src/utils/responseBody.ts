const errorResponseBody = {
    err:{},
    data:{},
    message: "Something went wrong. cannot process request",
    success: false
}

const successResponseBody = {
    err:{},
    data:{},
    message: "Successfully processed the request",
    success: true
}

export {
    errorResponseBody,
    successResponseBody
}