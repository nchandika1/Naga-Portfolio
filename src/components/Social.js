import React from 'react';
import './Portfolio.css';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/fb.png';
import github from '../assets/images/github.png';

const Social = () => {
	return (
		<div className="Social-media">
			<a href="https://www.linkedin.com/in/nchandika/" target="_blank"><img className="Social-icon" src={linkedin} /></a>
			<a href="https://www.facebook.com/nagarani" target="_blank"><img className="Social-icon" src={facebook} /></a>
	    <a href="https://github.com/nchandika1" target="_blank"><img className="Social-icon" src={github} /></a>
		</div>
	);
};

export default Social;