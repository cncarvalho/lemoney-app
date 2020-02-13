import React from 'react'
import BaseForm from "../base_form/base_form";
import PropTypes from "prop-types";

class EditForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			offer: {}
		}
	}

	componentDidMount() {
		this.fetchComponentData();
	}

	render() {
		return (
			<BaseForm offer={this.state.offer} key={Math.random()}/>
		);
	}

	fetchComponentData() {
		const fetchUrl = `${Api.address}/offers/${this.props.resourceId}`;

		fetch(fetchUrl)
			.then(response => response.json())
			.then(jsonResponse => this.mapResponseIntoState(jsonResponse))
			.then(newState => this.setState(newState))
	}

	mapResponseIntoState(jsonResponse) {
		return Promise.resolve({
			offer: {
				...jsonResponse.data.attributes,
				id: this.props.resourceId
			}
		});
	}
}

EditForm.propTypes = {
	resourceId: PropTypes.string.isRequired
};

export default EditForm
