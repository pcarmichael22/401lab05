'use strict';

const Model = require('../mongo.js');
const schema = require('./categories-schema.js');


class Categories{
    constructor () {
        this.schema = schema
    }

    get() {
        return this.schema.find()
    }
}

// How can we connect ourselves to the mongo interface?
// What do we export?