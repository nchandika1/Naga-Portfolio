import React from 'react';
import naga from '../../../assets/images/naga.jpeg';

const Home = () => {
	console.log("Inside Home");
	return (
		<div>
			<img src={naga} alt="Naga" />
			<p className="About-content">
				I am a full stack developer trained at UC Berekely Coding Bootcamp Program
			</p>
		</div>
	);
}

export default Home;