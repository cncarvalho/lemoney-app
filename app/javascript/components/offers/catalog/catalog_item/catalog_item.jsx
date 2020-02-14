import React from 'react'
import './catalog_item.scss'
import OfferImage from "../offer_image/offer_image";
import OfferContent from "../offer_content/offer_content";
import ShopButton from "../shop_button/shop_button";
import PropTypes from "prop-types";

class CatalogItem extends React.Component {
	render() {
		return (
			<div className="catalog-item">
				<OfferImage endsAt={this.props.offer.attributes.ends_at} imageUrl={this.props.offer.links.image}/>
				<OfferContent offer={this.props.offer}/>
				<ShopButton linkAddress={this.props.offer.attributes.url}/>
			</div>
		);
	}
}

CatalogItem.propTypes = {
	offer: PropTypes.object.isRequired
};

export default CatalogItem
