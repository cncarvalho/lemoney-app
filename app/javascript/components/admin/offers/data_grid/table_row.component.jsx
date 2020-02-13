import React from 'react'
import PropTypes from 'prop-types';
import Badge from "react-bootstrap/Badge";
import DeleteButton from "./delete_button.component";
import EditButton from "./edit_button.component";
import './table_row.styles.scss'
import Form from "react-bootstrap/Form";

class TableRow extends React.Component {
	render() {
		const attributes = this.props.rowData.attributes;

		return (
			<tr>
				<td className="align-middle">{this.props.rowData.id}</td>
				<td className="align-middle">{attributes.advertiser_name}</td>
				<td className="align-middle">{attributes.url}</td>
				<td className='align-middle text-center'>{this.renderAvailabilityTag()}</td>
				<td className='align-middle text-center'>
					{this.renderDeleteButton()}
					{this.renderEditButton()}
				</td>
			</tr>
		);
	}

	renderEditButton = () => {
		return (
			<EditButton
				resourceId={this.props.rowData.id}/>
		);
	}

	renderDeleteButton = () => {
		return (
			<DeleteButton
				handleSuccess={this.props.handleDeleteSuccess}
				resourceId={this.props.rowData.id}/>
		);
	}

	renderAvailabilityTag = () => {
		const isAvailable = this.props.rowData.attributes.available;
		const tagText = isAvailable ? 'Yes' : 'No';

		return (
			<Form>
				<Form.Switch
					label={tagText}
					checked={isAvailable}
					id={`offer[${this.props.rowData.id}].available`}
					onChange={() => console.log('changed')}
				/>
			</Form>
		);
	}
}

TableRow.propTypes = {
	handleDeleteSuccess: PropTypes.func.isRequired,
	rowData: PropTypes.object.isRequired,
};

export default TableRow
