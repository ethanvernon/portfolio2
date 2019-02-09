import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';

export class CallToAction extends Component {
  render() {
    return (
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
						<Button outline color="primary">
							Get in touch
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}
