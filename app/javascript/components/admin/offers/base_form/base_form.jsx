import React from 'react'
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {toast} from "react-toastify";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BaseForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formData: {
				advertiser_name: props.advertiser_name || '',
				available: props.available || false,
				description: props.description || '',
				ends_at: props.ends_at || '',
				premium: props.premium || false,
				starts_at: props.starts_at || '',
				url: props.url || '',
			},
			hasUnsavedChanges: false,
			validationErrors: {}
		}
	}

	render() {
		return (
			<Form onSubmit={(e) => this.handleSubmit(e)}>
				<Form.Group>
					<Form.Label>Advertiser name</Form.Label>
					<Form.Control type="text"
												name='advertiser_name'
												isInvalid={!!this.state.validationErrors.advertiser_name}
												onChange={(e) => this.handleInputChange(e)}
												value={this.state.formData.advertiser_name}/>
					<Form.Control.Feedback type="invalid">
						{this.state.validationErrors.advertiser_name}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group>
					<Form.Label>URL</Form.Label>
					<Form.Control type="text"
												name='url'
												isInvalid={!!this.state.validationErrors.url}
												onChange={(e) => this.handleInputChange(e)}
												value={this.state.formData.url}/>
					<Form.Control.Feedback type="invalid">
						{this.state.validationErrors.url}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control as="textarea"
												rows='3'
												name='description'
												isInvalid={!!this.state.validationErrors.description}
												onChange={(e) => this.handleInputChange(e)}
												value={this.state.formData.description}/>
					<Form.Control.Feedback type="invalid">
						{this.state.validationErrors.description}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group>
					<Form.Label>Starts at</Form.Label>
					<Form.Control type="text"
												name='starts_at'
												isInvalid={!!this.state.validationErrors.starts_at}
												onChange={(e) => this.handleInputChange(e)}
												value={this.state.formData.starts_at}/>
					<Form.Control.Feedback type="invalid">
						{this.state.validationErrors.starts_at}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group>
					<Form.Label>Ends at</Form.Label>
					<Form.Control type="text"
												name='ends_at'
												isInvalid={!!this.state.validationErrors.ends_at}
												onChange={(e) => this.handleInputChange(e)}
												value={this.state.formData.ends_at}/>
					<Form.Control.Feedback type="invalid">
						{this.state.validationErrors.ends_at}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group>
					<Form.Check type='switch'
											id='premium'
											label="Premium offer?"
											name='premium'
											onChange={(e) => this.handleSwitchChange(e)}
											checked={this.state.formData.premium}/>
				</Form.Group>

				<Form.Group>
					<Form.Check type='switch'
											id='available'
											label="Available?"
											name='available'
											onChange={(e) => this.handleSwitchChange(e)}
											checked={this.state.formData.available}/>
				</Form.Group>

				<Row>
					<Col className='text-right'>
						{this.state.hasUnsavedChanges ? this.renderDiscardButton() : this.renderCancelButton()}
						<Button variant="primary" type="submit">
							Save
						</Button>
					</Col>
				</Row>
			</Form>
		);
	}

	renderCancelButton() {
		return (
			<Button className='mr-2' variant="danger" href='/admin/offers'>
				Cancel
			</Button>
		);
	}

	renderDiscardButton() {
		return (
			<Button className='mr-2' variant="danger" onClick={() => this.discardChanges()}>
				Discard changes
			</Button>
		);
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const requestUrl = `${Api.address}/offers/`;
		const requestMethod = 'POST';
		const requestBody = JSON.stringify(this.state.formData);
		const requestHeaders = {Accept: 'application/json', 'Content-Type': 'application/json'};
		const requestOptions = {headers: requestHeaders, method: requestMethod, body: requestBody};

		fetch(requestUrl, requestOptions)
			.then(this.handleResponse);
	}

	handleResponse = (response) => {
		if (response.ok) {
			toast.success('The offer was successfully created');
			return this.redirectBack();
		} else if (response.status === 403) {
			return toast.error('You have no permission to do this');
		} else if (response.status === 422) {
			toast.error('There are some validation errors');

			return response.json()
				.then((jsonResponse) => this.mapValidationErrorsIntoState(jsonResponse))
				.then((newState) => {
					this.setState({
						...this.state,
						...{validationErrors: newState}
					})
				});
		}

		toast.error('An error has occurred');
	};

	redirectBack() {
		window.location.href = '/admin/offers';
	}

	discardChanges() {
		const actionConfirmed = confirm('All changes will be discarded. Do you wish to proceed?');
		if (actionConfirmed) {
			return this.redirectBack();
		}
	}

	mapValidationErrorsIntoState = (response) => {
		return response.data.errors.reduce((newState, fieldValidation) => {
			newState[fieldValidation.field] = fieldValidation.messages.join(', ');
			return newState;
		}, {});
	}

	handleInputChange = e =>
		this.setState({
			hasUnsavedChanges: true,
			formData: {
				...this.state.formData,
				[e.target.name]: e.target.value,
			}
		});

	handleSwitchChange = e =>
		this.setState({
			hasUnsavedChanges: true,
			formData: {
				...this.state.formData,
				[e.target.name]: e.target.checked,
				hasUnsavedChanges: true
			}
		});
}

export default BaseForm
