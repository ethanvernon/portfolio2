import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myAvatar from './myAvatar.svg';

export class Title extends Component {
	render() {
		return (
			<div id='title'>
				<div className='title-container'>
					<h1 className="display-5">Full-stack Web Developer</h1>
					<p className="lead">I'm a full-stack web developer in Chicago, IL. I learned to code while teaching abroad in China!</p>
					<img className='avatar' src={myAvatar} />
				</div>
			</div>
		);
	}
}
