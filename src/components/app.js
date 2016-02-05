import { Component } from 'react';
import OnsenUI from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


export default class App extends Component {
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
