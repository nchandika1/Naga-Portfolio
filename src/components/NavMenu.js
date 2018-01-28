import React from 'react';
import home from '../assets/images/home.png';
import './Portfolio.css';

class NavMenu extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(page) {
		this.props.onMenuChange(page);
	}

	render() {
		return (
			<div className="menuStyle">
				<a className="menuOptionStyle" onClick={() => this.handleClick('Home')}>
					<img className="Home-image" src={home} alt="Home" />
				</a>
				<a className="menuOptionStyle" onClick={() => this.handleClick('About')}>About</a>
				<a className="menuOptionStyle" onClick={() => this.handleClick('Blog')}>Blog</a>
				<a className="menuOptionStyle" onClick={() => this.handleClick('Contact')}>Contact</a>
			</div>
		);
	}
}

export default NavMenu;