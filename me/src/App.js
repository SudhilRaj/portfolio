import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';
import BackToTop from './components/back-to-top';
import personalData from './personalData.json';
class App extends Component {
	constructor() {
		super();
		this.state = {
			personalData: personalData
		}
	}
	render() {
		return (
			<div className="main-wrapper">
				<Header {...this.state}></Header>
				<Home {...this.state}></Home>
				<main id="main">
					<About {...this.state}></About>
					<Skills></Skills>
					<Resume></Resume>
					<Contact {...this.state}></Contact>
				</main>
				<Footer></Footer>
				<BackToTop></BackToTop>
			</div>
		);
	}
}

export default App;
