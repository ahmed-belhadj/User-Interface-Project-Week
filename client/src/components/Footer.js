import React from 'react';
import {Container, Row, Col, Input, FormText} from 'reactstrap';
import styled from "styled-components";

const FooterHeading = styled.h1`
	font-weight: regular;
	font-size: 20px;
	line-height: 24px
	color: #FFFFFF;
`;

const FooterText = styled.p`
	font-weight: regular;
	font-size: 14px;
	line-height: 26px
	color: #FFFFFF;
`;


export default class Footer extends React.Component {
    render() {
        return (
            <Container
                fluid
                style={{
                    paddingTop: "10vh",
                    background: "#828282",
                }}
            >
                <Row style={{
                    justifyContent: "space-evenly",
                }}
                >
                    <Col xs="3">
                        <FooterHeading>Interested in starting a project?<br/>Let's talk:</FooterHeading>
                        <Input type="email" name="email" id="Email" placeholder="Enter email"/>
                        <FormText>
                            <FooterText>We'll never share your email with anyone else.</FooterText>
                        </FormText>
                    </Col>
                    <Col xs="auto">
                        <FooterHeading>New York</FooterHeading>
                        <FooterText>123 Lane</FooterText>
                        <FooterText>Suite 100</FooterText>
                        <FooterText>Albany, NY 12345</FooterText>
                        <FooterText>(202) 555-0144</FooterText>
                    </Col>
                    <Col xs="auto">
                        <FooterHeading>Florida</FooterHeading>
                        <FooterText>Ocean Drive</FooterText>
                        <FooterText>Suite 201</FooterText>
                        <FooterText>Orlando, FL 22345</FooterText>
                        <FooterText>(502) 555-0144</FooterText></Col>
                    <Col xs="auto">
                        <FooterHeading>California</FooterHeading>
                        <FooterText>Mountain Street</FooterText>
                        <FooterText>Suite 105</FooterText>
                        <FooterText>San Diego, CA 22345</FooterText>
                        <FooterText>(702) 555-0144</FooterText>
                    </Col>
                </Row>
                <Row>
                    <Col
                        style={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <FooterText>Copyright Ⓒ {(new Date().getFullYear())} Smith and Jones</FooterText>
                    </Col>
                </Row>
            </Container>
        );
    }
}