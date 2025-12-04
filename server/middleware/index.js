const requiresLogin = (req, res, next) => {
    return next();
};

const requiresLogout = (req, res, next) => {
    return next();
};

const requiresSecure = (req, res, next) => {
    return next();
};

const bypassSecure = (req, res, next) => {
    next();
};

module.exports.requiresLogin = requiresLogin;
module.exports.requiresLogout = requiresLogout;

if(process.env.NODE_ENV === 'production') {

} else {

}