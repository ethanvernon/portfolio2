import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';

export class CallToAction extends Component {
  render() {
    return (
    	<div id='cta-wrapper'>
	    	<div id='cta-block'>
	    	</div>
	    	<div id='call-to-action'>
				<Container>
					<Row>
						<Col md='4'>
							<h1>
								Reach out!
							</h1>
						</Col>
						<Col md='4'>
							<p>
								Looking for a new addition to your team? Let's get in touch.
							</p>
						</Col>
						<Col md='4'>
							<a href ="http://www.fromgaming.com/contact.html">
							<Button outline color="primary">
								Hire Me
							</Button>
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
    );
  }
}
