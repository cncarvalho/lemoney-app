import React from 'react'
import './catalog_item.scss'
import OfferImage from "../offer_image/offer_image";
import OfferContent from "../offer_content/offer_content";
import ShopButton from "../shop_button/shop_button";

const CatalogItem = () => {
	return (
		<div className="catalog-item">
			<OfferImage/>
			<OfferContent/>
			<ShopButton/>
		</div>
	);
};

export default CatalogItem
