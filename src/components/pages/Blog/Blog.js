import React from 'react';
import './Blog.css';

const style = {
	color: 'red'
};

const Blog = () => {
	return (
		<div className="Blog-content">
			<div className="Project">
				<table className="Table-Style">
					<tr>
						<th>Project Name</th>
						<th>Description</th>
						<th>Technologies Used</th>
						<th>Deployment</th>
					</tr>
						<td>HOPE APP <sub style={style}>REACT</sub></td>
						<td>App to keep track of individual donations in $$ and Hours</td>
						<td>React, JSX, Node, JSX, Chart, Axiios, Sequelize/MySQL</td>
						<td><a href="https://shielded-retreat-54823.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://shielded-retreat-54823.herokuapp.com</a></td>
					<tr>
						<td>Web Scraper</td>
						<td>CRUD App that scrapes News articles from TechCrunch.com</td>
						<td>jQuery, Handlebars, Cheerio, Node.js, Express, MongoDB</td>
						<td><a href="https://infinite-stream-74984.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://infinite-stream-74984.herokuapp.com</a></td>
					</tr>
					<tr>
						<td>NYT Search <sub style={style}>REACT</sub></td>
						<td>Search Articles from NY Times website on a given topic.</td>
						<td>React, JSX, Bootstrap, AJAX, MongoDB, Node.js, Express</td>
						<td><a href="https://secure-cliffs-21579.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://secure-cliffs-21579.herokuapp.com</a></td>
					</tr>
					<tr>
						<td>Eat-Da-Burger</td>
						<td>Keep track of interesting Burgers</td>
						<td>Bootstrap, jQuery, Javascript, Handlebars, Sequelize/MySQL, Node.js, Express</td>
						<td><a href="https://thawing-brook-52166.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://thawing-brook-52166.herokuapp.com</a></td>
					</tr>
					<tr>
						<td>SipAndLearn</td>
						<td>App to learn and enjoy different Wine Regions of California!</td>
						<td>Bootstrap, jQuery, Javascript, AJAX, Wikipedia, Google and Eventbrite APIs</td>
						<td><a href="https://nchandika1.github.io/SipAndLearn/" target="_blank" rel="noopener noreferrer">https://nchandika1.github.io/SipAndLearn</a></td>
					</tr>
					<tr>
						<td>Giftastic</td>
						<td>Fetch and display dynamic GIFS using GIPHY APIs</td>
						<td>jQuery, AJAX, HTML, CSS</td>
						<td><a href="https://nchandika1.github.io/Giftastic/" target="_blank" rel="noopener noreferrer">https://nchandika1.github.io/Giftastic</a></td>
					</tr>
					<tr>
						<td>Hangman Game</td>
						<td>Static App that lets the user play the game on the web.</td>
						<td>Bootstrap, jQuery, Javascript, HTML, CSS</td>
						<td><a href="https://nchandika1.github.io/Hangman-Game/" target="_blank" rel="noopener noreferrer">hhttps://nchandika1.github.io/Hangman-Game</a></td>
					</tr>
					<tr>
						<td>Trivial Trivia</td>
						<td>A Fun Trivia Game</td>
						<td>jQuery, HTML, CSS</td>
						<td><a href="https://nchandika1.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer">https://nchandika1.github.io/TriviaGame</a></td>
					</tr>
					<tr>
						<td>Crystal Collector's Game</td>
						<td>Just a fun web based Game</td>
						<td>jQuery, HTML, CSS</td>
						<td><a href="https://nchandika1.github.io/CrystalCollectorGame/" target="_blank" rel="noopener noreferrer">https://nchandika1.github.io/CrystalCollectorGame</a></td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default Blog;