import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Services from "./views/Services";
import Contact from "./views/Contact";


// Define our div, but with the use of props.theme this time
const GlobalStyles = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
	font-family: ${props => props.theme.fontFamily};
`;

library.add(faBars, faTimes);

class App extends Component {
	render() {
		return (
			<GlobalStyles>
				<NavigationBar />
				<Route exact path="/" component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/contact" component={Contact} />
			</GlobalStyles>
		);
	}
}

export default App;
