const models = require('../models');

const { Account } = models;

const loginPage = (req, res) => res.render('login');

const signupPage = (req, res) => res.render('signup');

const logout = (req, res) => res.redirect('/');

const login = (req, res) => {

};

const signup = async (req, res) => {
    const username = `${req.body.username}`;
    const pass = `${req.body.pass}`;
    const pass2 = `${req.body.pass2}`;

    if(!username || !pass || !pass2) {
        return res.status(400).json({ error: 'All fields are required!' });
    };

    if (pass !== pass2) {

    };
};

module.exports = {
  loginPage,
  signupPage,
  logout,
  login,
  signup,
};
