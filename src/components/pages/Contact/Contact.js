import React from 'react';
import './Contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log("Clicked!");
	}

	render() {
		return (
			<div className="fa-icon-content">
				<p><i className="fa fa-phone fa-3x fa-cog"></i>
					<span className="fa-icon-text">(408)836-7582</span>
				</p>
				<p><i className="fa fa-envelope fa-3x fa-cog"></i>
					<a href="mailto:nchandika@gmail.com"><span className="fa-icon-text">nchandika@gmail.com</span></a>
				</p>
				<p><i className="fa fa-file-text fa-3x fa-cog"></i>
					<span className="fa-icon-text" onClick={() => this.handleClick()}>Resume</span>
				</p>
			</div>);
	}
}

export default Contact;