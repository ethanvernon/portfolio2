import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import logoInvert from './logo-invert.svg';
import linkedin from './linkedin-in-brands.svg';
import github from './github-brands.svg';
import codepen from './codepen-brands.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


export class Bottom extends Component {
  render() {
    return (
    	<div id='bottom'>
    		<Container>
				<Row>
					<Col>
						<img className='my-logo' src={logoInvert}/>
						<h1>Living the life I want in the future, today.</h1>
						<div className='my-links'>
							<span className="fa-layers fa-fw">
								<FontAwesomeIcon icon={faCircle} size='2x' transform='grow-3' className='icon-circles' id='icon-test'/>
								<FontAwesomeIcon icon={ faGithub } size='1x' transform="grow-10" className='icon-inners'/>
							</span>
							<span className="fa-layers fa-fw">
								<FontAwesomeIcon icon={faCircle} size='2x' transform='grow-3 left-1' className='icon-circles'/>
								<FontAwesomeIcon icon={ faLinkedinIn } size='1x' transform="grow-10" className='icon-inners'/>
							</span>
							<span className="fa-layers fa-fw">
								<FontAwesomeIcon icon={faCircle} size='2x' transform='grow-3' className='icon-circles'/>
								<FontAwesomeIcon icon={ faCodepen } size='1x' transform="grow-10" className='icon-inners'/>
							</span>
							<span className="fa-layers fa-fw">
								<FontAwesomeIcon icon={faCircle} size='2x' transform='grow-3' className='icon-circles'/>
								<FontAwesomeIcon icon={ faEnvelope } size='1x' transform="grow-10" className='icon-inners'/>
							</span>
						</div>
						<p id='copyright'>
							Handcrafted by me &#169; Ethan Vernon
						</p>
					</Col>
				</Row>
			</Container>

    	</div>
    );
  }
}
