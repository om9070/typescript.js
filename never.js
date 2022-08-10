function apiError(msg, code) {
    throw { msg: msg, code: code };
}
console.log(apiError("service side error", 500));
