import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardDeck } from 'reactstrap';
import dice from './storydice-markup.png';
import metadata from './metadata-mockup.png';
import exerciselog from './exerciselog-markup.png';
import pomo from './pomodoro-markup.png';
import ab from './abworkout-mockup.png';
import spell from './spellchooser-markup.png';
import company from './company-markup.png';
import mernurl from './urlshortner-markup.png';

export class Works extends Component {
  render() {
    return (
    	<div id='works'>
			<Container>
				<Row>
					<Col>
						<h1>
							My Recent Projects
						</h1>
						<p>
							I like to learn something new, and then make some projects to test it. I have completed 25+ projects in the last year, and nowadays everything I make is responsive and uses modern, in-demand technologies. Below are just some of my most recent works. Want to see more? <a href="http://www.fromgaming.com/contact.html">Get in touch.</a>
						</p>
						<CardDeck>

							<Card>
								<CardImg top width="100%" src={exerciselog} alt="Card image cap" />
								<CardBody>
									<CardTitle>Full-stack Exercise Logger</CardTitle>
									<CardSubtitle>MongoDB, Mongoose, Express.js, React.js, Node.js, Axios, React Router, HTML, CSS, Bootstrap</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>I made this exercise logger as additional practice making full-stack apps with JavaScript's MERN stack.</CardText>
									<a href="https://mernlog.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/mern-exerciseapp" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={mernurl} alt="Card image cap" />
								<CardBody>
									<CardTitle>MERN URL Shortener</CardTitle>
									<CardSubtitle>MongoDB, Mongoose, Express.js, React.js, Node.js, Axios, React Router, HTML, CSS, Bootstrap</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>This is one of my first efforts in making a full-stack web app using the MERN stack. It has since shortened 60+ URLs.</CardText>
									<a href="https://mernurl.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/mern-urlshortener" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={company} alt="Card image cap" />
								<CardBody>
									<CardTitle>Company Website</CardTitle>
									<CardSubtitle>React.js, React Router, HTML, CSS, Bootstrap</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>I made this responsive website as a practice in developing a website from a mockup and using React Router.</CardText>
									<a href="https://ethanvernon.github.io/company-page/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/company-page" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={dice} alt="Card image cap" />
								<CardBody>
									<CardTitle>Story Dice</CardTitle>
									<CardSubtitle>React.js, JavaScript, GIMP, HTML, CSS</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>This is a passion project I made to help me even further develop my creativity.</CardText>
									<a href="https://ethanvernon.github.io/story_dice/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/story_dice" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>

								</CardBody>
							</Card>
							
							<Card>
								<CardImg top width="100%" src={pomo} alt="Card image cap" />
								<CardBody>
									<CardTitle>Pomodoro Clock</CardTitle>
									<CardSubtitle>React.js, JavaScript, HTML, CSS, Bootstrap</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>I originally made this project with jQuery, but I recently updated it to use React and DOM/ES6 operations.</CardText>
									<a href="https://ethanvernon.github.io/pomodoro_clock/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/pomodoro_clock" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={ab} alt="Card image cap" />
								<CardBody>
									<CardTitle>Ab Workout Generator</CardTitle>
									<CardSubtitle>JavaScript, HTML, CSS, PHP, SQL</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>I made this project when I was learning PHP and SQL. Change into your gym clothes and give it a try.</CardText>
									<a href="http://fromgaming.com/ab-app-test-5.html" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<Button outline color="secondary" className='disable'>View code</Button>
								</CardBody>
							</Card>

						</CardDeck>
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}

/*
							<Card>
								<CardImg top width="100%" src={spell} alt="Card image cap" />
								<CardBody>
									<CardTitle>Cleric Spell Chooser</CardTitle>
									<CardSubtitle>React.js, JavaScript, JSON, HTML, CSS</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>This single page web app filters through a JSON array to help my friend pick his spells at the D&D table.</CardText>
									<a href="https://ethanvernon.github.io/spell_selector2/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/spell_selector2" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={npc} alt="Card image cap" />
								<CardBody>
									<CardTitle>NPC Generator</CardTitle>
									<CardSubtitle>React.js, JavaScript, JSON, HTML, CSS</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>This single day project takes the roll tables from the DMG and reduces them to the click of a button.</CardText>
									<a href="https://ethanvernon.github.io/npc_generator/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/npc_generator" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>
*/