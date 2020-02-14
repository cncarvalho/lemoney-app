import React from 'react'
import './offer_image.scss'
import Countdown from "../countdown/countdown";

const OfferImage = () => {
	return (
		<div className="offer-image"
				 style={{backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"}}>
			<Countdown/>
		</div>
	);
};

export default OfferImage
