import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import {FaEdit as EditIcon} from "react-icons/fa";

class EditButton extends React.Component {
	render() {
		return (
			<Button variant="primary" size='sm' href={`/admin/offers/${this.props.resourceId}/edit`}>
				<EditIcon/>
			</Button>
		);
	}
}

EditButton.propTypes = {
	resourceId: PropTypes.string.isRequired
};

export default EditButton
