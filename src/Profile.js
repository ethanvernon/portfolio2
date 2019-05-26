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
				I'm a full-stack JavaScript developer that has spent the last couple years in Shenzhen, China.
				I enjoy studying new technologies and using them in personal projects.
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
