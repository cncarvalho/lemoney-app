import React from 'react'
import './shop_button.scss'
import Button from "react-bootstrap/Button";

const ShopButton = () => {
	return (
		<div className="shop-button">
			<Button size='sm' variant='outline-success'>
				Shop now
			</Button>
		</div>
	);
};

export default ShopButton
