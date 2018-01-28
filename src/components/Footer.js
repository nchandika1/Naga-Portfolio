import React from 'react';
import './Portfolio.css'

class Footer extends React.Component {
	state = {
		year: (new Date()).getFullYear()
	}
	render () {
		return <div className='Footer'>© Copyright {this.state.year} Nagarani Chandika</div>;
	}
}

export default Footer;