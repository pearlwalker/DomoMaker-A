const requiresLogin = (req, res, next) => {

};

const requiresLogout = (req, res, next) => {

};

const requiresSecure = (req, res, next) => {

};

const bypassSecure = (req, res, next) => {

};

module.exports.requiresLogin = requiresLogin;
module.exports.requiresLogout = requiresLogout;

if(process.env.NODE_ENV === 'production') {

} else {

}