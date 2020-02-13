import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import {FaRegTrashAlt as DeleteIcon} from "react-icons/fa";
import {toast} from 'react-toastify';

class DeleteButton extends React.Component {
	render() {
		return (
			<Button variant="danger" size='sm' onClick={this.handleClick}>
				<DeleteIcon/>
			</Button>
		);
	}

	handleClick = () => {
		const requestUrl = `${Api.address}/offers/${this.props.resourceId}`;
		const requestOptions = {method: 'DELETE'};

		fetch(requestUrl, requestOptions).then(this.handleResponse);
	};

	handleResponse = (response) => {
		if (response.ok) {
			toast.success('The offer was successfully deleted');
			return this.props.handleSuccess();
		} else if (response.status === 403) {
			return toast.error('You have no permission to do this');
		} else if (response.status === 404) {
			return toast.error('This record does not exists anymore');
		}

		toast.error('An error has occurred');
	};
}

DeleteButton.propTypes = {
	resourceId: PropTypes.string.isRequired,
	handleSuccess: PropTypes.func.isRequired,
};

export default DeleteButton
