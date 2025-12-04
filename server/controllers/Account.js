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

  if (!username || !pass || !pass2) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  if (pass !== pass2) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  try {
    const hash = await Account.generateHash(pass);
  } catch (err) {
    console.log(err);
    if(err.code === 11000) {
        return res.status(400).json({ error: 'Username already in use!' });
    }
    return res.status(500).json({ error: 'Internal server error has occured!'});
  }
};

module.exports = {
  loginPage,
  signupPage,
  logout,
  login,
  signup,
};
