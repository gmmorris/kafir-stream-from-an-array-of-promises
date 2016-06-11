'use strict';

/**
 * Enable only the es2015 features currently enabled as default in node>=5.0.0
 * @type {Object}
 */
module.exports = {
    ecmaFeatures: {
        arrowFunctions: true,
        binaryLiterals: true,
        blockBindings: true,
        classes: true,
        forOf: true,
        generators: true,
        objectLiteralComputedProperties: true,
        objectLiteralDuplicateProperties: true,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        octalLiterals: true,
        spread: true,
        templateStrings: true,
        unicodeCodePointEscapes: true
        // defaultParams: true,
        // destructuring: true,
        // modules: true,
        // regexUFlag: true,
        // regexYFlag: true,
        // restParams: true,
        // superInFunctions: true,
        // globalReturn: true,
        // experimentalObjectRestSpread: true,
    }
};