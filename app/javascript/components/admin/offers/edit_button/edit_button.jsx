import React from 'react'
import PropTypes from 'prop-types';

class EditButton extends React.Component {
	render() {
		return (
			<a href={`/admin/offers/${this.props.resourceId}/edit`}>
				Edit
			</a>
		);
	}
}

EditButton.propTypes = {
	resourceId: PropTypes.string.isRequired
};

export default EditButton
