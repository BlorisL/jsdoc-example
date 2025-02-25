/**
 * Il modulo principale dell'applicazione.
*/
const { Utils } = require('./utils');
const { Components } = require('./components');

/**
 * Avvia l'applicazione.
 */
function startApp() {
  console.log('App started');
  console.log('Sum:', Utils.Math.add(2, 3));
  const component = new Components.MyComponent();
  component.render();
}

startApp();
