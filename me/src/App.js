import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import BackToTop from './components/back-to-top';
class App extends Component {
	render() {
		return (
			<body>
				<Header></Header>
				<Home></Home>
				<main id="main">
					<About></About>
					<Skills></Skills>
					<Resume></Resume>
					<Portfolio></Portfolio>
					<Services></Services>
					<Contact></Contact>
				</main>
				<Footer></Footer>
				<BackToTop></BackToTop>
			</body>
		);
	}
}

export default App;
