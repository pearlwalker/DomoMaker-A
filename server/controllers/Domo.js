const models = require('../models');

const Domo = models.Domo;

const makerPage = (req, res) => {
  res.render('app');
};

const makeDomo = async (req, res) => {
  if(!req.body.name || !req.body.age) {
    return res.status(400).json({ error: 'Both name and age are required!' });
  }
};

module.exports = {
  makerPage,
  makeDomo,
};
