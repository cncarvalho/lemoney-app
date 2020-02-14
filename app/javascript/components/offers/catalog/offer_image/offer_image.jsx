import React from 'react'
import './offer_image.scss'
import Countdown from "../countdown/countdown";
import PropTypes from "prop-types";

class OfferImage extends React.Component {
	render() {
		return (
			<div className="offer-image" style={{backgroundImage: `url('${this.props.imageUrl}')`}}>
				{!!this.props.endsAt && <Countdown endsAt={this.props.endsAt}/>}
			</div>
		);
	}
}

OfferImage.propTypes = {
	imageUrl: PropTypes.string,
	endsAt: PropTypes.string,
};


export default OfferImage
