import React, { Component } from 'react';
import Logo from './images/film_pic.jpg';
import Logo2 from '../images/download.jpg'
import '../index.css';
const Header = ({
	frameBorder,
	setFrameBorder,
}) => {
	return (
		<>

			<div  class="center">
			<tr>
			  <th><img style={{width: '240px', height: '155px'}} src={Logo} alt="Logo" /></th>
              
            </tr>
			   
	        </div>
		        
			<input
				name="frameBorder"
				type="checkbox"
				checked={!!frameBorder}
				onChange={() => setFrameBorder(!frameBorder)}
			/>
			<label htmlFor="frameBorder">Frameborder</label>

			
		</>
	);
};

export default Header;
