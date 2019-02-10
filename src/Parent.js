import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavHeader} from './NavHeader';
import {Title} from './Title';
import {Profile} from './Profile';
import {Skills} from './Skills';
import {Works} from './Works';
import {Testimonials} from './Testimonials';
import {Bottom} from './Bottom';
import {CallToAction} from './CallToAction';


export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
			githubColor: false,
			linkedinColor: false,
			codepenColor: false,
			mailColor: false
	    };

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(name) {
		/*if (name==='github') {
			let change = !this.state.githubColor;
			console.log('githubColor changed to '+change);
			this.setState({githubColor: change})
		}*/

		let change;

		switch(name) {

			case 'github':
				change = !this.state.githubColor;
				console.log('githubColor changed to '+change);
				this.setState({githubColor: change})
				break;
			case 'linkedin':
				change = !this.state.linkedinColor;
				console.log('linkedinColor changed to '+change);
				this.setState({linkedinColor: change})
				break;
			case 'codepen':
				change = !this.state.codepenColor;
				console.log('codepenColor changed to '+change);
				this.setState({codepenColor: change})
				break;
			case 'mail':
				change = !this.state.mailColor;
				console.log('mailColor changed to '+change);
				this.setState({mailColor: change})
				break;
			default:
				break;
		}

	}


	render() {
    return (
	    <div>
	    	<NavHeader/>
	    	<Title/>
	    	<Profile/>
	    	<Skills/>
	    	<Works/>
	    	<Testimonials/>	    	
	    	<CallToAction/>
	    	<Bottom
	    		githubHover={this.state.githubColor}
	    		linkedinHover={this.state.linkedinColor}
	    		codepenHover={this.state.codepenColor}
	    		mailHover={this.state.mailColor}
	    		handleToggle={this.handleToggle}/>
    	</div>
    );
  }
}
