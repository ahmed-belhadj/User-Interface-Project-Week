import React, {Component} from "react";
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import Heading from "../components/Heading";
import SubHeader from "../components/SubHeader";

class Contact extends Component {
    componentWillMount() {
        document.title = "Contact Us - S&J Architects";
    }

    render() {
        return (
            <div
                style={{
                    marginBottom: "10vh"
                }}
            >
                <Heading
                    content={"Contact Us"}
                    image="/img/contact/contact-jumbotron.png"
                />
                <Container>
                    <Row>
                        <Col xs="6">
                            <SubHeader content={"Get In Touch"}/>
                            <Form style={{
                                marginTop: "5vh"
                            }}>
                                <FormGroup
                                    style={{
                                        marginBottom: "5vh"
                                    }}
                                >
                                    <Label for="Email">Email address</Label>
                                    <Input type="email" name="email" id="Email" placeholder="Enter email"/>
                                    <FormText>
                                        We'll never share your email with anyone else.
                                    </FormText>
                                </FormGroup>
                                <FormGroup
                                    style={{
                                        marginBottom: "5vh"
                                    }}
                                >
                                    <Label for="Select">How many buildings do you need planned?</Label>
                                    <Input type="select" name="select" id="Select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup
                                    style={{
                                        marginBottom: "5vh"
                                    }}
                                >
                                    <Label for="Text">Provide a brief overview of your project needs:</Label>
                                    <Input type="textarea" name="text" id="Text"/>
                                </FormGroup>
                                <FormGroup
                                    tag="fieldset"
                                    style={{
                                        marginBottom: "5vh"
                                    }}
                                >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1"/>
                                            I am a small business
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1"/>
                                            I am a residential owner
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1"/>
                                            I am a corporation
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <Button outline color="secondary">Submit</Button>
                            </Form>
                        </Col>
                        <Col>
                        </Col>
                        <Col>
                            <SubHeader content={"Where We Work"}/>

                            <div
                                style={{
                                    marginTop: "5vh",
                                    marginBottom: "5vh"
                                }}
                            >
                                <h4><b>New York</b></h4>
                                <p>123 Lane</p>
                                <p>Suite 100</p>
                                <p>Albany, NY 12345</p>
                                <p>(202) 555-0144</p>
                            </div>

                            <div
                                style={{
                                    marginBottom: "5vh"
                                }}
                            >
                                <h4><b>Florida</b></h4>
                                <p>Ocean Drive</p>
                                <p>Suite 201</p>
                                <p>Orlando, FL 22345</p>
                                <p>(502) 555-0144</p>
                            </div>

                            <div
                                style={{
                                    marginBottom: "5vh"
                                }}
                            >
                                <h4><b>California</b></h4>
                                <p>Mountain Street</p>
                                <p>Suite 105</p>
                                <p>San Diego, CA 22345</p>
                                <p>(702) 555-0144</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;
