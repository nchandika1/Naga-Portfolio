import React, {Component}  from 'react';
import NavMenu from './NavMenu.js';
import About from './pages/About/About.js';
import Blog from './pages/Blog/Blog.js';
import Contact from './pages/Contact/Contact.js';
import Home from './pages/Home/Home.js';
import './Portfolio.css';


class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.handleMenuOptionChange = this.handleMenuOptionChange.bind(this);
		// this.displayPage = this.displayPage.bind(this);
		this.state = {
			currentPage: 'Home'
		}
	}

	handleMenuOptionChange(page) {
		this.setState({currentPage: page});
	}

	displayPage() {
		switch(this.state.currentPage) {
			case 'Home':
				return <Home />
			case 'About':
				return <About />;
			case 'Blog':
				return <Blog />;
			case 'Contact':
				return <Contact />;
			default:
				return null;
		}
	}

	render() {
		return(
			<div>
				<NavMenu onMenuChange={this.handleMenuOptionChange}/>
				{this.displayPage()}
			</div>
		);
	}
};

export default Portfolio;