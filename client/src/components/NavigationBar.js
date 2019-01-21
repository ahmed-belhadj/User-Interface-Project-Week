import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavigationBar.css";

const NavigationLogo = styled(NavbarBrand)`
	font-weight: bold;
	font-size: 24px;
	color: #ffffff;
	z-index: 2;
`;

export default class NavigationBar extends React.Component {
	/* Open */
	openNav() {
		document.getElementById("myNav").style.height = "100%";
	}

	/* Close */
	closeNav() {
		document.getElementById("myNav").style.height = "0%";
	}

	render() {
		return (
			<div>
				<Navbar
					dark
					fixed={"true"}
					style={{ backgroundColor: "rgba(130, 130, 130, 0.9)" }}
				>
					<NavigationLogo href="/" className="mr-auto">
						S&J
					</NavigationLogo>
					<Link to="" onClick={this.openNav} style={{ color: "white" }}>
						<FontAwesomeIcon icon="bars" />
					</Link>
					<div id="myNav" className="overlay">
						{/* <!-- Button to close the overlay navigation --> */}
						<Link to="" className="closebtn" onClick={this.closeNav}>
							<FontAwesomeIcon icon="times" />
						</Link>
						{/* <!-- Overlay content --> */}
						<div className="overlay-content">
							<Link to="/" onClick={this.closeNav}>
								Home
							</Link>
							<Link to="/services" onClick={this.closeNav}>
								Services
							</Link>
							<Link to="/contact" onClick={this.closeNav}>
								Contact
							</Link>
						</div>
					</div>
				</Navbar>
			</div>
		);
	}
}
