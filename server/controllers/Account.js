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
};

module.exports = {
  loginPage,
  signupPage,
  logout,
  login,
  signup,
};
