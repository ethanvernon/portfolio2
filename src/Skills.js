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
							Full-stack Web Developer
						</h1>
						<p>
							I usually make websites with create-react-app and Bootstrap and then upload to GitHub as I make progress.
						</p>
						<h2>
							Things I've learned:
						</h2>
						<p>JavaScript, HTML, CSS, SQL, PHP, React.js, Node.js, jQuery, SASS</p>
						<h2>
							Tools I use:
						</h2>
						<ul>
							<li>Github</li>
							<li>React Router</li>
							<li>NPM</li>
							<li>Command prompt</li>
							<li>GIMP</li>
							<li>Github Pages</li>
							<li>Sublime Text</li>
							<li>Bootstrap</li>
							<li>Codepen</li>
							<li>Method Draw</li>
							<li>Chrome Developer Tools</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}
