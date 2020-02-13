import React from 'react'
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import Form from "react-bootstrap/Form";

class ChangeStatusButton extends React.Component {
	render() {
		const isAvailable = this.props.isAvailable;
		const tagText = isAvailable ? 'Yes' : 'No';

		return (
			<Form>
				<Form.Switch
					label={tagText}
					checked={isAvailable}
					id={`offer[${this.props.resourceId}].available`}
					onChange={() => this.handleStatusChange()}
				/>
			</Form>
		);
	}

	handleStatusChange = () => {
		const requestUrl = `${Api.address}/offers/${this.props.resourceId}`;
		const requestMethod = 'PUT';
		const requestBody = JSON.stringify({ available: !this.props.isAvailable });
		const requestHeaders = {Accept: 'application/json', 'Content-Type': 'application/json'};
		const requestOptions = {headers: requestHeaders, method: requestMethod, body: requestBody};

		fetch(requestUrl, requestOptions)
			.then(this.handleResponse);
	};

	handleResponse = (response) => {
		if (response.ok) {
			toast.success('The offer was successfully updated');
			return this.props.handleSuccess();
		} else if (response.status === 403) {
			return toast.error('You have no permission to do this');
		} else if (response.status === 404) {
			return toast.error('This record does not exists anymore');
		}

		toast.error('An error has occurred');
	};
}

ChangeStatusButton.propTypes = {
	isAvailable: PropTypes.bool.isRequired,
	handleSuccess: PropTypes.func.isRequired,
	resourceId: PropTypes.string.isRequired,
};

export default ChangeStatusButton
