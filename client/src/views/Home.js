import React, { Component } from "react";
import Heading from "../components/Heading";

class Home extends Component {
	componentWillMount() {
		document.title = "Home - S&J Architects";
	}

	render() {
		return (
			<div>
				<Heading
					content={["Integrity,", <br />, "Excellence,", <br />, "Progress."]}
					image="/img/home/home-jumbotron.png"
				/>
				<h1>Home</h1>
				Menu Content S&J Home Services Contact Home Page Content: Integrity,
				Excellence, Progress. Smith & Jones Architects Et sed autem causae
				appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam
				vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no
				errem Learn More Futuristic Designs Et sed autem causae appareat, tempor
				abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse
				consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem View
				Designs Recent Projects THE VILLAS The Villas bring to the table win-win
				survival strategies to ensure proactive domination. At the end of the
				day, going forward, a new normal that has evolved from generation X is
				on the runway heading towards a streamlined cloud solution. Capitalize
				on low hanging fruit to identify a ballpark value added activity to beta
				test. Override the digital divide with additional clickthroughs from
				DevOps. Nanotechnology immersion along the information highway will
				close the loop on focusing solely on the bottom line. OUTSKIRTS The
				Outskirts are amazing to the table win-win survival strategies to ensure
				proactive domination. At the end of the day, going forward, a new normal
				that has evolved from generation X is on the runway heading towards a
				streamlined cloud solution. Capitalize on low hanging fruit to identify
				a ballpark value added activity to beta test. Override the digital
				divide with additional clickthroughs from DevOps. Nanotechnology
				immersion along the information highway will close the loop on focusing
				solely on the bottom line. THE BLOCKS The Blocks are amazing to the
				table win-win survival strategies to ensure proactive domination. At the
				end of the day, going forward, a new normal that has evolved from
				generation X is on the runway heading towards a streamlined cloud
				solution. Capitalize on low hanging fruit to identify a ballpark value
				added activity to beta test. Override the digital divide with additional
				clickthroughs from DevOps. Nanotechnology immersion along the
				information highway will close the loop on focusing solely on the bottom
				line. FOOTER CONTENT Interested in starting a project? Let’s talk: Enter
				email We'll never share your email with anyone else. New York 123 Lane
				Suite 100 Albany, NY 12345 202 555 0144 Florida Ocean Drive Suite 201
				Orlando, FL 22345 502 555 0144 California Mountain Street Suite 105 San
				Diego, CA 22345 702 555 0144 Copyright © 2018 Smith and Jones
			</div>
		);
	}
}

export default Home;
