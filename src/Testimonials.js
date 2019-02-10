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
						<p className='description'>
							People have said some nice things about me...
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
						<p className="quote">
							"Ethan is one of the most driven and dedicated individuals I have ever met. He gives 100% to everything he takes on. As a student he achieved multiple degrees and is fluent in two additional languages to English. Ethan takes on new challenges with a positive attitude and always goes above and beyond."
						</p>
						<h2>
							Sonja Beauchamp
						</h2>
						<h3>
						Regional Sales Executive, Versant Health
						</h3>						
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}
