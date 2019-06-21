import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, CardDeck } from 'reactstrap';
import dice from './storydice-markup.png';
import metadata from './metadata-mockup.png';
import exerciselog from './exerciselog-markup.png';
import pomo from './pomodoro-markup.png';
import ab from './abworkout-mockup.png';
import spell from './spellchooser-markup.png';
import company from './company-markup.png';
import mernurl from './urlshortner-markup.png';
import markdown from './markdown-markup.png';
import meteor from './meteor-markup.png';

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
						<p className='works-description'>
							There are many more projects on my <a href="http://www.github.com/ethanvernon" target='__blank'>Github</a>, as I have completed 25+ in the last year. These are all self-directed, so I have to come up with ideas and pick new technologies to use in each new project.
							 Below are just some of my most recent works. <a href="http://www.fromgaming.com/contact.html">Let me know if you have any questions!</a>
						</p>
						<CardDeck>

							<Card>
								<div className='card-img-container'>
									<a href="https://ethanvernon.github.io/mern-meteorite-explorer/" target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={meteor} alt="Card image cap" /></a>
								</div>
								<CardBody>
									<CardTitle className='card-app-name'>Meteorite Explorer App</CardTitle>
									<CardText className='card-tech'>React.js, Axios, SASS, Bootstrap, Ant Design</CardText>
									<p className="summary">Summary</p>
									<CardText className='card-summary'>This project queries NASA's meteorite landing dataset. Firsts in this project included: learning how to use Socrata API, implement some form of pagination, and adding little animation.</CardText>
									<a href="https://ethanvernon.github.io/mern-meteorite-explorer/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/mern-meteorite-explorer" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<div className='card-img-container'>
									<a href="https://redux-markdown.herokuapp.com/" target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={markdown} alt="Card image cap" /></a>
								</div>
								<CardBody>
									<CardTitle className='card-app-name'>Full-stack Markdown Previewer</CardTitle>
									<CardText className='card-tech'>MongoDB, Mongoose, Express.js, React.js, Node.js, Axios, Redux, HTML, CSS, Bootstrap</CardText>
									<p className="summary">Summary</p>
									<CardText className='card-summary'>This app idea came from FreeCodeCamp's APIs and Microservices track. By this point, I was already pretty familiar with making full-stack apps. So I decided to learn Redux and try using it in this project. Success!</CardText>
									<a href="https://redux-markdown.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/markdown-previewer" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<div className='card-img-container'>
									<a href="https://mernlog.herokuapp.com/" target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={exerciselog} alt="Card image cap" /></a>
								</div>
								<CardBody>
									<CardTitle className='card-app-name'>Full-stack Exercise Logger</CardTitle>
									<CardText className='card-tech'>MongoDB, Mongoose, Express.js, React.js, Node.js, Axios, React Router, HTML, CSS, Bootstrap</CardText>
									<p className="summary">Summary</p>
									<CardText className='card-summary'>I made this exercise logger as additional practice making full-stack apps with JavaScript's MERN stack.</CardText>
									<a href="https://mernlog.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/mern-exerciseapp" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<div className='card-img-container'>
									<a href="https://mernurl.herokuapp.com/" target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={mernurl} alt="Card image cap" /></a>
								</div>
								<CardBody>
									<CardTitle className='card-app-name'>MERN URL Shortener</CardTitle>
									<CardText className='card-tech'>MongoDB, Mongoose, Express.js, React.js, Node.js, Axios, React Router, HTML, CSS, Bootstrap</CardText>
									<p className="summary">Summary</p>
									<CardText className='card-summary'>This is one of my first efforts in making a full-stack web app using the MERN stack. It has since shortened 60+ URLs.</CardText>
									<a href="https://mernurl.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/mern-urlshortener" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<div className='card-img-container'>
									<a href="https://ethanvernon.github.io/company-page/" target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={company} alt="Card image cap" /></a>
								</div>
								<CardBody>
									<CardTitle className='card-app-name'>Company Website</CardTitle>
									<CardText className='card-tech'>React.js, React Router, HTML, CSS, Bootstrap</CardText>
									<p className="summary">Summary</p>
									<CardText className='card-summary'>I made this responsive website as a practice in developing a website from a mockup and using React Router.</CardText>
									<a href="https://ethanvernon.github.io/company-page/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/company-page" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>

							<Card>
								<div className='card-img-container'>
									<a href="http://fromgaming.com/ab-app-test-5.html" target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={ab} alt="Card image cap" /></a>
								</div>
								<CardBody>
									<CardTitle className='card-app-name'>Ab Workout Generator</CardTitle>
									<CardText className='card-tech'>JavaScript, HTML, CSS, PHP, SQL</CardText>
									<p className="summary">Summary</p>
									<CardText className='card-summary'>I made this project when I was learning PHP and SQL. Change into your gym clothes and give it a try.</CardText>
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
								<div className='card-img-container'>
									<a href="https://ethanvernon.github.io/story_dice/" target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={dice} alt="Card image cap" /></a>
								</div>
								<CardBody>
									<CardTitle>Story Dice</CardTitle>
									<CardText>React.js, JavaScript, GIMP, HTML, CSS</CardText>
									<p className="summary">Summary</p>
									<CardText>This is a passion project I made to help me even further develop my creativity.</CardText>
									<a href="https://ethanvernon.github.io/story_dice/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/story_dice" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>

								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={spell} alt="Card image cap" />
								<CardBody>
									<CardTitle>Cleric Spell Chooser</CardTitle>
									<CardText>React.js, JavaScript, JSON, HTML, CSS</CardText>
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
									<CardText>React.js, JavaScript, JSON, HTML, CSS</CardText>
									<p className="summary">Summary</p>
									<CardText>This single day project takes the roll tables from the DMG and reduces them to the click of a button.</CardText>
									<a href="https://ethanvernon.github.io/npc_generator/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/npc_generator" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>
							
							<Card>
								<CardImg top width="100%" src={pomo} alt="Card image cap" />
								<CardBody>
									<CardTitle>Pomodoro Clock</CardTitle>
									<CardText>React.js, JavaScript, HTML, CSS, Bootstrap</CardText>
									<p className="summary">Summary</p>
									<CardText>I originally made this project with jQuery, but I recently updated it to use React and DOM/ES6 operations.</CardText>
									<a href="https://ethanvernon.github.io/pomodoro_clock/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">View demo</Button></a>
									<a href="https://github.com/ethanvernon/pomodoro_clock" target="_blank" rel="noopener noreferrer"><Button outline color="secondary">View code</Button></a>
								</CardBody>
							</Card>
*/