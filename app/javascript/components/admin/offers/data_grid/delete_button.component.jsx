import React from 'react'
import PropTypes from 'prop-types';
import {FaRegTrashAlt as DeleteIcon} from "react-icons/fa";
import {toast} from 'react-toastify';

class DeleteButton extends React.Component {
	render() {
		return (
			<a href="#" className='text-danger' onClick={this.handleClick}>
				<DeleteIcon/>
			</a>
		);
	}

	handleClick = (event) => {
		event.preventDefault();

		const requestUrl = `http://localhost:3001/offers/${this.props.resourceId}`;
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
