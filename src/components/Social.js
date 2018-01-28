import React from 'react';
import './Portfolio.css';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/fb.png';
import github from '../assets/images/github.png';

const Social = () => {
	return (
		<div className="Social-media">
			<a href="https://www.linkedin.com/in/nchandika/" target="_blank" rel="noopener noreferrer"><img className="Social-icon" src={linkedin} alt="LinkedIn" /></a>
			<a href="https://www.facebook.com/nagarani" target="_blank" rel="noopener noreferrer"><img className="Social-icon" src={facebook} alt="Facebook" /></a>
	    <a href="https://github.com/nchandika1" target="_blank" rel="noopener noreferrer"><img className="Social-icon" src={github} alt="Github" /></a>
		</div>
	);
};

export default Social;