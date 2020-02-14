import React from 'react'
import './catalog.scss'
import CatalogItem from "./catalog_item/catalog_item";
import {apiClient} from "../../../api/api_client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Catalog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			offers: []
		}
	}

	componentDidMount() {
		this.fetchComponentData();
	}

	render() {
		return (
			<div className="catalog">
				<Row>
					{this.renderItems()}
				</Row>
			</div>
		);
	}

	renderItems = () => this.state.offers.map(this.renderItem);

	renderItem = (offer, key) => {
		return (
			<Col xl={3} lg={4} md={6} key={key}>
				<CatalogItem offer={offer}/>
			</Col>
		);
	};

	fetchComponentData() {
		apiClient.fetch('/offers')
			.then(response => response.json())
			.then(jsonResponse => this.mapResponseIntoState(jsonResponse))
			.then(newState => this.setState(newState))
	}

	mapResponseIntoState(jsonResponse) {
		return Promise.resolve({offers: this.sortPremiumFirst(jsonResponse)});
	}

	sortPremiumFirst(jsonResponse) {
		const [premiumOffers, regularOffers] = jsonResponse.data.reduce((offers, offer) => {
			offer.attributes.premium ?
				offers[0].push(offer) :
				offers[1].push(offer);

			return offers;
		}, [[], []]);

		return [...premiumOffers, ...regularOffers];
	}
}

export default Catalog
