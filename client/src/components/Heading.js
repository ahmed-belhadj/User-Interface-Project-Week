import React from "react";
import { Jumbotron, Container } from "reactstrap";
import styled from "styled-components";

const JumbotronHeader = styled.h1`
	font-weight: bold;
	font-size: 64px;
	line-height: 75px
	color: #FFFFFF;
`;

const Heading = props => {
	return (
		<div>
			<Jumbotron
				fluid
				style={{
					background: "url(" + props.image + ")",
					backgroundSize: "cover"
				}}
			>
				<Container fluid>
					<JumbotronHeader className="display-3">
						{props.content}
					</JumbotronHeader>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Heading;
