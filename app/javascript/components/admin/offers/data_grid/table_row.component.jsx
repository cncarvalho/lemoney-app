import React from 'react'
import PropTypes from 'prop-types';
import Badge from "react-bootstrap/Badge";

class TableRow extends React.Component {
	render() {
		const attributes = this.props.rowData.attributes;

		return (
			<tr>
				<td>{this.props.rowData.id}</td>
				<td>{attributes.advertiser_name}</td>
				<td>{attributes.url}</td>
				<td className='text-center'>{this.renderAvailabilityTag()}</td>
				<td></td>
			</tr>
		);
	}

	renderAvailabilityTag = () => {
		const isAvailable = this.props.rowData.attributes.available;
		const tagText = isAvailable ? 'Yes' : 'No';
		const tagVariant = isAvailable ? 'success' : 'secondary';

		return (
			<Badge pill variant={tagVariant}>{tagText}</Badge>
		);
	}
}

TableRow.propTypes = {
	rowData: PropTypes.object.isRequired
};

export default TableRow
