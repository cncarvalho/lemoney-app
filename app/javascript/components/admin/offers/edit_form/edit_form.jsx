import React from 'react'
import BaseForm from "../base_form/base_form";
import PropTypes from "prop-types";
import {apiClient} from "../../../../api/api_client";

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
		const requestPath = `/offers/${this.props.resourceId}`;

		apiClient.fetch(requestPath)
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
