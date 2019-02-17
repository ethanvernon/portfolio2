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
				Hello, I'm Ethan. I'd like to join your team.
			</h1>
			<p>
				I'm in China now, but I'm moving back to the US. 
				I've taught myself how to code, and I'm either building or learning every day.
				I learn fast, I'm always positive, and I'm easy to coach. 
				As well, I've got experience as a teacher, so I'll give back to the other new guys.
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
