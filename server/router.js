const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.get('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signupPage);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

  app.get('/logout', controllers.Account.logout);

  app.get('/maker', controllers.Domo.makerPage);
  app.post('/maker', controllers.Domo.makeDomo);

  app.get('/', controllers.Account.loginPage);
};

module.exports = router;
