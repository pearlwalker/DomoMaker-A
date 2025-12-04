const mongoose = require('mongoose');
const _ = require('underscore');

const setName = (name) => _.escape(name).trim();

const DomoSchema = new mongoose.Schema({
    name: {

    },
    age: {

    },
    owner: {

    },
    createdDate: {

    },
});

DomoSchema.statics.toAPI = (doc) => ({

});

const DomoModel = mongoose.model('Domo', DomoSchema);
module.exports = DomoModel;
