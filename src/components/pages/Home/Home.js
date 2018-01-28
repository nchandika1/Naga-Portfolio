import React from 'react';
import hello from '../../../assets/images/hello.png';
import '../../Portfolio.css';

const Home = () => {
	return (<div className="Content-style"><img className="Home-content" src={hello} alt="Hello" /></div>);
};

export default Home;