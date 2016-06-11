'use strict';

let nodeFeatures = require('./node.js');

/**
 * Extend node features with the ones that are staging. Node version >=5.0.0
 * @type {Object}
 */
module.exports = Object.assign({}, nodeFeatures, {
    ecmaFeatures: {
        restParams: true
    }
});