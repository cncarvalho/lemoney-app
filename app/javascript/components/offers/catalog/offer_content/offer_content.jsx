import React from 'react'
import './offer_content.scss'
import PremiumTag from "../premium_tag/premium_tag";

const OfferContent = () => {
	return (
		<div className="offer-content">
			<div className="advertiser-name">
				<PremiumTag/>
				<span>Amazon</span>
			</div>
			<div className="description">
				<span>20% off in fantasy e-books</span>
			</div>
		</div>
	);
};

export default OfferContent
