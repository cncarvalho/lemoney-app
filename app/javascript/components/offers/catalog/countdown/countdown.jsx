import React from 'react'
import './countdown.scss'
import {FaClock as TimerIcon} from "react-icons/fa";

const Countdown = () => {
	return (
		<div className="countdown">
			<div className="tag">
				<TimerIcon/>
				<span>5 days left</span>
			</div>
		</div>
	);
};

export default Countdown
