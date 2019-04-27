import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'reactstrap';
import myAvatar from './myAvatar.svg';

export class Title extends Component {
  render() {
    return (
		<div id='title'>
			<Jumbotron>
				<h1 className="display-5">Full-stack JavaScript Developer</h1>
				<p className="lead">I'm a fast-learning, American web developer living in China.</p>
				<img className='avatar' src={myAvatar}/>
			</Jumbotron>
		</div>
    );
  }
}
