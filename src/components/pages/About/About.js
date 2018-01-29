import React from 'react';
import naga from '../../../assets/images/naga.jpeg';
import './About.css';

const Home = () => {
	console.log("Inside Home");
	return (
		<div style={{overflow: 'auto'}}>
			<div className="clearfix About-style">
				<img className="About-image" src={naga} alt="Naga" />
				<p className="About-title">Full stack developer</p>
				
			</div>
			<div className="About-content"><p>Having just graduated from UC Berkeley Extension program on Full Stack Web Development,
					I am looking for an opportunity to design, develop and test web applications.</p>
					<p>I am well versed in <i>Javascript, jQuery, React, Node.js.</i>   I built many web apps using these technologies and various DBs such as MySQL, Sequelize, MongoDB.
					</p>
					<p>I am especially proud of my final project that showcases <i>React, Node.js, Chart, Axios, JSX, Sequelize</i> etc.
					Please do checkout my Portfolio under <span style={{color: '#66dbf9'}}>Blog.</span></p>
					<p>Prior to this, I have done years of embedded software development in the area of Networking at <em>Cisco</em> and <em>Apple</em>.
					I hold multiple patents in the area of Layer 2 Switching Software for Cisco Catalyst switches.
					Details of my work experience are in my <i>Resume</i> on the <span style={{color: '#66dbf9'}}>Contact</span> page.
					</p>
			</div>
			<div className="About-content">
				<p className="Edu-title">Educational Background:</p>
				<div>
				• UC Berkeley Extension:  Full Stack Web Development program (Oct 2017 - Jan 2018) <br />
				• Hackbright Academy for Women Coders: Intro to Python (Sep 2017 - Oct 2017)<br />
				• Arizona State University: Masters in Computer Science (Aug 1993 - May 1995)<br />
				• Osmania University, College of Engg: Bachelors in Computer Science and Engg (Aug 1989 - June 1993)<br />	
				</div>			
			</div>
		</div>
	);
}

export default Home;