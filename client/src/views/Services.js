import React, {Component} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import Heading from "../components/Heading";
import SubHeader from "../components/SubHeader";

class Services extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentWillMount() {
        document.title = "Services - S&J Architects";
    }

    render() {
        return (
            <div>
                <Heading
                    content={"Services"}
                    image="/img/services/services-jumbotron.png"
                />
                <Container>
                    <p
                        style={{
                            marginTop: "5vh",
                            marginBottom: "5vh"
                        }}
                    >
                        Services Services include: completely synergize resource taxing relationships via premier niche
                        markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically
                        innovate resource-leveling customer service for state of the art customer service.
                    </p>

                    <Nav
                        pills
                        style={{
                            marginTop: "5vh",
                            marginBottom: "5vh",
                            justifyContent: "space-evenly"
                        }}
                    >
                        <NavItem>
                            <NavLink
                                color="secondary"
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Pre-Construction
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Construction
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '3'})}
                                onClick={() => {
                                    this.toggle('3');
                                }}
                            >
                                Design Build
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '4'})}
                                onClick={() => {
                                    this.toggle('4');
                                }}
                            >
                                Sustainability
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent
                        activeTab={this.state.activeTab}
                        style={{
                            marginTop: "5vh",
                            marginBottom: "5vh"
                        }}
                    >
                        <TabPane tabId="1">
                            <SubHeader content={"Pre-Construction"}/>
                            <Row>
                                <Col>
                                    <p>
                                        Completely synergize resource taxing relationships via premier niche markets.
                                        Professionally cultivate one-to-one customer service with robust ideas.
                                        Dynamically
                                        innovate resource-leveling customer service for state of the art customer
                                        service.
                                    </p>
                                    <p>
                                        Phosfluorescently engage worldwide methodologies with web-enabled technology.
                                        Interactively coordinate proactive e-commerce via process-centric "outside the
                                        box"
                                        thinking. Completely pursue scalable customer service through sustainable
                                        potentialities.
                                    </p>
                                </Col>
                                <Col>
                                    <img
                                        src={"img/services/services-tab-pre-construction-img.png"}
                                        alt={"Pre-Construction"}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <SubHeader content={"Construction"}/>
                            <Row>
                                <Col>
                                    <p>
                                        Completely synergize resource taxing relationships via premier niche markets.
                                        Professionally cultivate one-to-one customer service with robust ideas.
                                        Dynamically
                                        innovate resource-leveling customer service for state of the art customer
                                        service.
                                    </p>
                                    <p>
                                        Phosfluorescently engage worldwide methodologies with web-enabled technology.
                                        Interactively coordinate proactive e-commerce via process-centric "outside the
                                        box"
                                        thinking. Completely pursue scalable customer service through sustainable
                                        potentialities.
                                    </p>
                                </Col>
                                <Col>
                                    <img
                                        src={"img/services/services-tab-construction-img.png"}
                                        alt={"Construction"}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <SubHeader content={"Design Build"}/>
                            <Row>
                                <Col>
                                    <p>
                                        Completely synergize resource taxing relationships via premier niche markets.
                                        Professionally cultivate one-to-one customer service with robust ideas.
                                        Dynamically
                                        innovate resource-leveling customer service for state of the art customer
                                        service.
                                    </p>
                                    <p>
                                        Phosfluorescently engage worldwide methodologies with web-enabled technology.
                                        Interactively coordinate proactive e-commerce via process-centric "outside the
                                        box"
                                        thinking. Completely pursue scalable customer service through sustainable
                                        potentialities.
                                    </p>
                                </Col>
                                <Col>
                                    <img
                                        src={"img/services/services-tab-design-build-img.png"}
                                        alt={"Design Build"}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <SubHeader content={"Sustainability"}/>
                            <Row>
                                <Col>
                                    <p>
                                        Completely synergize resource taxing relationships via premier niche markets.
                                        Professionally cultivate one-to-one customer service with robust ideas.
                                        Dynamically
                                        innovate resource-leveling customer service for state of the art customer
                                        service.
                                    </p>
                                    <p>
                                        Phosfluorescently engage worldwide methodologies with web-enabled technology.
                                        Interactively coordinate proactive e-commerce via process-centric "outside the
                                        box"
                                        thinking. Completely pursue scalable customer service through sustainable
                                        potentialities.
                                    </p>
                                </Col>
                                <Col>
                                    <img
                                        src={"img/services/services-tab-sustainability-img.png"}
                                        alt={"Sustainability"}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
        );
    }
}

export default Services;
