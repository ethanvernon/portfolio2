import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import codeIcon from './code-icon.svg';

export class Skills extends Component {
  render() {
    return (
    	<div id='skills'>
			<Container>
				<Row>
					<Col>
						<img className='code-icon' src={codeIcon}/>
						<h1>
							Full-stack JavaScript Developer
						</h1>
						<h2>
							Things I've learned:
						</h2>
						<p>JavaScript, HTML, CSS, React.js, MongoDB, Mongoose, Express, Node.js, jQuery, PHP, SQL, SASS</p>
						<h2>
							Tools I use:
						</h2>
						<ul>
							<li>Github</li>
							<li>Redux</li>
							<li>React Router</li>
							<li>Axios</li>
							<li>npm</li>
							<li>Command prompt</li>
							<li>Sublime Text</li>
							<li>Bootstrap</li>
							<li>Chrome Developer Tools</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}
