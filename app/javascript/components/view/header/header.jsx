import React from 'react'
import './header.scss';
import Dropdown from "react-bootstrap/Dropdown";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				{this.renderBrandImage()}
				{this.renderNavigationButton()}
			</div>
		);
	}

	renderBrandImage() {
		return <img src="/brand.svg" alt="Lemoney"/>;
	}

	renderNavigationButton() {
		return (
			<Dropdown>
				<Dropdown.Toggle variant="outline-success" id="navigation-button">
					Select site
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="/">Clients site</Dropdown.Item>
					<Dropdown.Item href="/admin/offers">Admin site</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	}
}

export default Header;
