import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

export class Profile extends Component {
  render() {
    return (
    	<div id='profile'>
		<Container>
			<Row>
				<Col>
					<h1>
						Hello, I'm Ethan. I'd like to join your team.
					</h1>
					<p>
						I'm in China now, but I'm moving back to the US. 
						I've taught myself how to code, and I make websites for my friends as practice, but there's still more for me to learn!
						I learn fast and I'm easy to coach. 
						And I've got experience as a teacher, so I'll give back to the other new guys.
					</p>
				</Col>
			</Row>
		</Container>
		</div>
    );
  }
}
