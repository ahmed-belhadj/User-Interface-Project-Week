import React from "react";
import {Jumbotron, Container} from "reactstrap";
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
                    background: "url(" + props.image + ") fixed center no-repeat",
                    backgroundSize: "cover",
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-end"
                }}
            >
                <Container fluid>
                    <JumbotronHeader>
                        {props.content}
                    </JumbotronHeader>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Heading;
