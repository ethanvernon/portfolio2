import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myAvatar from './myAvatar.svg';

export class Title extends Component {
  render() {
    return (
		<div id='title'>
			<div className='title-container'>
				<h1 className="display-5">Full-stack JavaScript Developer</h1>
				<p className="lead">I'm an enthusiastic web developer in Irvine, California. I just got back from 2 years in China!</p>
				<img className='avatar' src={myAvatar}/>
			</div>
		</div>
    );
  }
}
