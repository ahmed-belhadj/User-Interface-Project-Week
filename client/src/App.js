import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./views/Home";
import Services from "./views/Services";
import Contact from "./views/Contact";

class App extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/contact" component={Contact} />
			</div>
		);
	}
}

export default App;
