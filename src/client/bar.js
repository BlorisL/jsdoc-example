/**
 * @module Project
 */

/**
 * Metodo del client 1 nel namespace Client.
 * @function [Client] function4
 * @param {string} param - Parametro del metodo.
 * @returns {string} Stringa risultante.
 */
function function4(param) {
  return `Client method 1 called with param: ${param}`;
}

/**
 * Metodo del client 2 nel namespace Client.
 * @function [Client] function5
 * @param {string} param - Parametro del metodo.
 * @returns {string} Stringa risultante.
 */
function function5(param) {
  return `Client method 2 called with param: ${param}`;
}

module.exports = { function4, function5 };
