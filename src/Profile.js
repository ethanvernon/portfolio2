import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import resume from './EthanVernonResume.pdf';

export class Profile extends Component {
	render() {
		return (
			<div id='profile'>
				<Container><Row><Col>
					<h1>
						Hello, I'm Ethan, <a href="http://www.fromgaming.com/contact.html" target='__blank'>let's talk!</a>
					</h1>
					<p>
						I was teaching in China, playing computer games every night, not knowing where I was going in life... Then I started this journey and haven't looked back!
						Now I'm in Chicago, IL, doing full-stack development at a cyber security firm.
				Take a look at my <a href="#skills">skills</a>, some of my most recent <a href="#works">projects</a>, and read some of my managers' <a href="#testimonials">testimonials</a> below.
			</p>
					<a href={resume} target='__blank'>
						<Button outline color="primary">
							Print Resume
				</Button>
					</a>
				</Col></Row></Container>
			</div>
		);
	}
}
