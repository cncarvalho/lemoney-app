import React from 'react'
import './countdown.scss'
import {FaClock as TimerIcon} from "react-icons/fa";
import PropTypes from "prop-types";

class Countdown extends React.Component {
	render() {
		return (
			<div className="countdown">
				<div className="tag">
					<TimerIcon/>
					<span>{this.formatDate()}</span>
				</div>
			</div>
		);
	}

	formatDate() {
		const date = new Date(this.props.endsAt);

		const formattedDate = date.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit'});

		return `Expires on ${formattedDate}`
	}
}

Countdown.propTypes = {
	endsAt: PropTypes.string.isRequired,
};

export default Countdown
