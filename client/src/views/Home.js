import React, {Component} from "react";
import {Container, Row, Col, Button} from "reactstrap";
import Heading from "../components/Heading";
import SubHeader from "../components/SubHeader";

class Home extends Component {
    componentWillMount() {
        document.title = "Home - S&J Architects";
    }

    render() {
        return (
            <div>
                <Heading
                    content={["Integrity,", <br/>, "Excellence,", <br/>, "Progress."]}
                    image="/img/home/home-jumbotron.png"
                />
                <Container>
                    <Row
                        style={{
                            alignItems: "center",
                            marginBottom: "10vh"
                        }}
                    >
                        <Col>
                            <SubHeader content={"Smith & Jones Architects"}/>
                            <p>
                                Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu
                                timeam
                                vidisse
                                consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem
                            </p>
                            <Button outline color="secondary">Learn More</Button>
                        </Col>
                        <Col>
                            <img src={"/img/home/home-img-1.png"} alt={"Smith & Jones Architects"}/>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            alignItems: "center",
                            marginBottom: "10vh"
                        }}
                    >
                        <Col>
                            <img src={"/img/home/home-img-2.png"} alt={"Futuristic Designs"}/>
                        </Col>
                        <Col>
                            <SubHeader content={"Futuristic Designs"}/>
                            <p>
                                Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu
                                timeam
                                vidisse
                                consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem
                            </p>
                            <Button outline color="secondary">View Designs</Button>
                        </Col>
                    </Row>
                    <SubHeader
                        style={{
                            marginBottom: "10vh"
                        }}
                        content={"Recent Projects"}/>
                    <div style={{
                        position: "relative",
                        marginBottom: "10vh"
                    }}
                    >
                        <img src={"/img/home/home-villas-img.png"}
                             alt={"The Villas"}
                             style={{width: "100%"}}
                        />
                        <div
                            style={{
                                position: "absolute",
                                height: "10vh",
                                width: "33%",
                                bottom: "-5vh",
                                right: "0",
                                backgroundColor: "#D8D8D8"
                            }}
                        >
                            <h3
                                style={{
                                    letterSpacing: "2vh",
                                    textAlign: "center",
                                    verticalAlign: "middle",
                                    lineHeight: "10vh"
                                }}
                            >
                                THE VILLAS
                            </h3>
                        </div>
                    </div>
                    <Row
                        style={{
                            marginBottom: "10vh"
                        }}
                    >
                        <Col sm="12" md={{size: 6, offset: 3}}>
                            <p>
                                The Villas bring to the table win-win survival strategies to
                                ensure proactive domination. At the end of the day, going
                                forward, a new normal that has evolved from generation X is on
                                the runway heading towards a streamlined cloud solution.
                            </p>
                            <p>
                                Capitalize on low hanging fruit to identify a ballpark value
                                added activity to beta test. Override the digital divide with
                                additional clickthroughs from DevOps. Nanotechnology immersion
                                along the information highway will close the loop on focusing
                                solely on the bottom line.
                            </p>
                        </Col>
                    </Row>
                    <div style={{
                        position: "relative",
                        marginBottom: "10vh"
                    }}
                    >
                        <img src={"/img/home/home-outskirts-img.png"}
                             alt={"Outskirts"}
                             style={{width: "100%"}}
                        />
                        <div
                            style={{
                                position: "absolute",
                                height: "10vh",
                                width: "33%",
                                bottom: "-5vh",
                                left: "0",
                                backgroundColor: "#D8D8D8"
                            }}
                        >
                            <h3
                                style={{
                                    letterSpacing: "2vh",
                                    textAlign: "center",
                                    verticalAlign: "middle",
                                    lineHeight: "10vh"
                                }}
                            >
                                OUTSKIRTS
                            </h3>
                        </div>
                    </div>
                    <Row
                        style={{
                            marginBottom: "10vh"
                        }}
                    >
                        <Col sm="12" md={{size: 6, offset: 3}}>
                            <p>
                                The Outskirts bring to the table win-win survival strategies to
                                ensure proactive domination. At the end of the day, going
                                forward, a new normal that has evolved from generation X is on
                                the runway heading towards a streamlined cloud solution.
                            </p>
                            <p>
                                Capitalize on low hanging fruit to identify a ballpark value
                                added activity to beta test. Override the digital divide with
                                additional clickthroughs from DevOps. Nanotechnology immersion
                                along the information highway will close the loop on focusing
                                solely on the bottom line.
                            </p>
                        </Col>
                    </Row>
                    <div style={{
                        position: "relative",
                        marginBottom: "10vh"
                    }}
                    >
                        <img src={"/img/home/home-the-blocks-img.png"}
                             alt={"The Blocks"}
                             style={{width: "100%"}}
                        />
                        <div
                            style={{
                                position: "absolute",
                                height: "10vh",
                                width: "33%",
                                bottom: "-5vh",
                                right: "0",
                                backgroundColor: "#D8D8D8"
                            }}
                        >
                            <h3
                                style={{
                                    letterSpacing: "2vh",
                                    textAlign: "center",
                                    verticalAlign: "middle",
                                    lineHeight: "10vh"
                                }}
                            >
                                THE BLOCKS
                            </h3>
                        </div>
                    </div>
                    <Row
                        style={{
                            marginBottom: "10vh"
                        }}
                    >
                        <Col sm="12" md={{size: 6, offset: 3}}>
                            <p>
                                The Blocks bring to the table win-win survival strategies to
                                ensure proactive domination. At the end of the day, going
                                forward, a new normal that has evolved from generation X is on
                                the runway heading towards a streamlined cloud solution.
                            </p>
                            <p>
                                Capitalize on low hanging fruit to identify a ballpark value
                                added activity to beta test. Override the digital divide with
                                additional clickthroughs from DevOps. Nanotechnology immersion
                                along the information highway will close the loop on focusing
                                solely on the bottom line.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
