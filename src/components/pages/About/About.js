import React from 'react';
import naga from '../../../assets/images/naga.jpeg';
import './About.css';

const Home = () => {
	console.log("Inside Home");
	return (
		<div>
			<div className="clearfix About-style">
				<img className="About-image" src={naga} alt="Naga" />
				<p className="About-title">Full stack developer</p>
				
			</div>
			<p className="About-content"><p>Having just graduated from UC Berkeley Extension program on Full Stack Web Development,
					I am looking for an opportunity to design, develop and test web applications.</p>
					<p>I am well versed in Javascript, jQuery, React, Node.js.
					I built many web apps using these technologies and various DBs such as MySQL, Sequelize, MongoDB.
					</p>
					<p>I am especially proud of my final project that showcases React, Node.js, Chart, Axios, JSX, Sequelize etc.
					Please do checkout my Portfolio under Blog.</p>
			</p>
		</div>
	);
}

export default Home;