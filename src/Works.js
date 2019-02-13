import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardDeck } from 'reactstrap';
import codeIcon from './code-icon.svg';
import dice from './thumbnail-dice.png';
import pomo from './thumbnail-pomo.png';
import npc from './thumbnail-npc.png';
import party from './thumbnail-party.png';
import ab from './thumbnail-ab.png';
import spell from './thumbnail-spell.png';

export class Works extends Component {
  render() {
    return (
    	<div id='works'>
			<Container>
				<Row>
					<Col>
						<h1>
							My Projects
						</h1>
						<p>
							I like to learn something new, and then make some projects to test it. Have an idea for me? <a href="http://www.fromgaming.com/contact.html">Let me know.</a>
						</p>
						<CardDeck>

							<Card>
								<CardImg top width="100%" src={dice} alt="Card image cap" />
								<CardBody>
									<CardTitle>Story Dice</CardTitle>
									<CardSubtitle>React.js, JavaScript, GIMP, HTML, CSS</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>This creativity tool picks and rolls 3 of 18 dice at random and displays the results.</CardText>
									<a href="https://ethanvernon.github.io/story_dice/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">Check it out</Button></a>
								</CardBody>
							</Card>
							
							<Card>
								<CardImg top width="100%" src={pomo} alt="Card image cap" />
								<CardBody>
									<CardTitle>Pomodoro Clock</CardTitle>
									<CardSubtitle>React.js, JavaScript, HTML, CSS, Bootstrap</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>This clock lets you set break and session times and rings a bell to let you know when time is up.</CardText>
									<a href="https://ethanvernon.github.io/pomodoro_clock/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">Check it out</Button></a>
								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={npc} alt="Card image cap" />
								<CardBody>
									<CardTitle>NPC Generator</CardTitle>
									<CardSubtitle>React.js, JavaScript, JSON, HTML, CSS</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>This single day project takes the roll tables from the DMG and reduces them to the click of a button.</CardText>
									<a href="https://ethanvernon.github.io/npc_generator/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">Check it out</Button></a>
								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={party} alt="Card image cap" />
								<CardBody>
									<CardTitle>Party Manager</CardTitle>
									<CardSubtitle>React.js, JavaScript, HTML, CSS</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>My second React app made accessing character and campaign information at the D&D table easier.</CardText>
									<a href="https://ethanvernon.github.io/manage-party/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">Check it out</Button></a>
								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={ab} alt="Card image cap" />
								<CardBody>
									<CardTitle>Ab Workout Generator</CardTitle>
									<CardSubtitle>JavaScript, HTML, CSS, PHP, SQL</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>This single page app generates an ab workout of variable length, compelete with audio and visual cues.</CardText>
									<a href="http://fromgaming.com/ab-app-test-5.html" target="_blank" rel="noopener noreferrer"><Button outline color="primary">Check it out</Button></a>
								</CardBody>
							</Card>

							<Card>
								<CardImg top width="100%" src={spell} alt="Card image cap" />
								<CardBody>
									<CardTitle>Cleric Spell Chooser</CardTitle>
									<CardSubtitle>React.js, JavaScript, JSON, HTML, CSS</CardSubtitle>
									<p className="summary">Summary</p>
									<CardText>This single page web app filters through a JSON array to help my friend pick his spells at the D&D table.</CardText>
									<a href="https://ethanvernon.github.io/spell_selector2/" target="_blank" rel="noopener noreferrer"><Button outline color="primary">Check it out</Button></a>
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
