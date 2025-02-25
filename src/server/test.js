/**
 * @module Project
 */

/**
 * Metodo del server 1 nel namespace Server.
 * @function [Server] function:1
 * @param {string} param - Parametro del metodo.
 * @returns {string} Stringa risultante.
 */
function function1(param) {
  return `Server method 1 called with param: ${param}`;
}

/**
 * Metodo del server 2 nel namespace Server.
 * @function [Server] function:2
 * @param {string} param - Parametro del metodo.
 * @returns {string} Stringa risultante.
 */
function function2(param) {
  return `Server method 2 called with param: ${param}`;
}

module.exports = { function1, function2 };
