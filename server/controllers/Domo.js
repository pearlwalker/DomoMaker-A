const models = require('../models');

const Domo = models.Domo;

const makerPage = (req, res) => {
  res.render('app');
};

const makeDomo = async (req, res) => {

};

module.exports = {
  makerPage,
  makeDomo,
};
