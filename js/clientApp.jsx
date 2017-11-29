// @flow

// No curly brackets means we are importing the entire react module
import React from 'react';
// Curly brackets just means that we are importing just the export render = function(){} from react-dom
import { render } from 'react-dom';
// Import for performance tools
// import Perf from 'react-addons-perf';
import App from './App';

/* Below is for testing performance. You do not want to include in production
window.Perf = Perf;
Perf.start(); */

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  // this tells webpack that if module.hot exists (that means we are in development)
  // module.hot.accept tells webpack that if their is a change to App.jsx then call this function every time (renderApp())
  module.hot.accept('./App', () => {
    renderApp();
  });
}
