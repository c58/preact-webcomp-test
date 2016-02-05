// import 'es6-promise';
// import 'isomorphic-fetch';

// Preact
/*
import { h, render } from 'preact';
import App from './components/app';
window.h = h;

render(<App />, document.body);
*/

// React

import { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
window.h = createElement;

ReactDOM.render(<App />, document.body);
