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
								Make a hire
							</h1>
						</Col>
						<Col md='4'>
							<p>
								Looking for a new teammate? Let's chat. You'll find me agreeable.
							</p>
						</Col>
						<Col md='4'>
							<a href ="http://www.fromgaming.com/test/contact.html">
							<Button outline color="primary">
								Get in touch
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
