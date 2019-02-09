import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

export class Testimonials extends Component {
  render() {
    return (
    	<div id='testimonials'>
			<Container>
				<Row>
					<Col>
						<h1>
							Testimonials
						</h1>
						<p>
							People I've worked with have said some nice things...
						</p>
						<p className="quote">
							"I had worked with Ethan in my position as head of English department in Xili Primary School for one year. I found him to be consistenty responsible and honest, working with dedication as a teacher. He had a wonderful rapport with both colleagues and students."
						</p>
						<h2>
							Christina Zhang
						</h2>
						<h3>
						English Department Head, Xili Primary School
						</h3>
						
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}
