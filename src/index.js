// import 'es6-promise';
// import 'isomorphic-fetch';
import OnsenUI from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


// Preact
/*
import { h, render, Component } from 'preact';
window.h = h;
class App extends Component {
	render() {
		return (
			<div>
			  <ons-page>
			    <ons-toolbar>
			      <div className="center">Title</div>
			    </ons-toolbar>
			    <p>
			      <ons-button modifier="light">Push</ons-button>
			    </p>
			  </ons-page>
			</div>
		);
	}
}
render(<App />, document.body);
*/

// React
import { createElement, Component } from 'react';
import ReactDOM from 'react-dom';
window.h = createElement;
class App extends Component {
	render() {
		return (
			<div>
			  <ons-page>
			    <ons-toolbar>
			      <div className="center">Title</div>
			    </ons-toolbar>
			    <p>
			      <ons-button modifier="light">Push</ons-button>
			    </p>
			  </ons-page>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.body);
