const mongoose = require('mongoose');
const _ = require('underscore');

const setName = (name) => _.escape(name).trim();