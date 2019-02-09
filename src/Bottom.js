import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import logoInvert from './logo-invert.svg';

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
							<i className="fa fa-github" style={{"fontSize":36}}></i>
						</div>
					</Col>
				</Row>
			</Container>

    	</div>
    );
  }
}
