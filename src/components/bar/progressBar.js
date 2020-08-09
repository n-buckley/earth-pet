// //have the pet and "life" bar - for every completed reminder life bar increases 
// //we do have accout

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

/**
 * {@param} Track is the main bar
 */
const Track = styled.div`
	width: 100%;
	background-color: #d8d8d8;
	border-radius: 20px;
	position: relative;
	margin: 15px 0;
	height: 35px;
`;

/**
 * {@param} Thumb is the percentage bar
 */
const Thumb = styled.div`
	width: ${props => props.percentage}%;
	height: 100%;
	background: linear-gradient(to left, #F2709C, #FF9472);
	border-radius: 20px;
	transition: ease-in-out 0.3s;
	
`;

export default class ProgressBar extends React.Component {
	clamp = (min, value, max) => {
		return Math.min(Math.max(min, value), max);
	}
	render() {
		return (
			<Track>
				<Thumb percentage= {this.clamp(0, this.props.percentage, 100)} />
			</Track>
		);
	}
}

ProgressBar.propTypes = {
	percentage: PropTypes.number,
}
