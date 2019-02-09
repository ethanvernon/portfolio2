import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavHeader} from './NavHeader';
import {Title} from './Title';

export class Parent extends Component {
  render() {
    return (
	    <div>
	    	<NavHeader/>
	    	<Title/>
    	</div>
    );
  }
}
