import React from 'react'
import './shop_button.scss'
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

class ShopButton extends React.Component {
	render() {
		return (
			<div className="shop-button">
				<Button size='sm' variant='outline-success' target='_blank' href={this.props.linkAddress}>
					Shop now
				</Button>
			</div>
		);
	}
}

ShopButton.propTypes = {
	linkAddress: PropTypes.string.isRequired
};

export default ShopButton
