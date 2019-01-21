import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// Define what props.theme will look like
const theme = {
	background: "#FFFFFF",
	color: "#222222",
	fontFamily: "Roboto, Arial, sans-serif"
};

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Router>
			<App />
		</Router>
	</ThemeProvider>,
	document.getElementById("root")
);
