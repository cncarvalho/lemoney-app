import React from 'react'
import './offer_content.scss'
import PremiumTag from "../premium_tag/premium_tag";
import PropTypes from "prop-types";

class OfferContent extends React.Component {
	render() {
		return (
			<div className="offer-content">
				<div className="advertiser-name">
					{this.props.offer.attributes.premium && <PremiumTag/>}
					<span>{this.props.offer.attributes.advertiser_name}</span>
				</div>
				<div className="description">
					<span>{this.props.offer.attributes.description}</span>
				</div>
			</div>
		);
	}
}

OfferContent.propTypes = {
	offer: PropTypes.object.isRequired
};

export default OfferContent
