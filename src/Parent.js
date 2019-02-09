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
  render() {
    return (
	    <div>
	    	<NavHeader/>
	    	<Title/>
	    	<Profile/>
	    	<Skills/>
	    	<Works/>
	    	<Testimonials/>
	    	<Bottom/>
	    	<CallToAction/>
    	</div>
    );
  }
}
