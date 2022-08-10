function apiError(msg,code):never{
    throw {msg,code}
}
console.log(apiError("service side error",500))