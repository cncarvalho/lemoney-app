import React from 'react'
import PropTypes from 'prop-types';
import EditButton from "../edit_button/edit_button";
import DeleteButton from "../delete_button/delete_button";
import './table_row.scss';
import ChangeStatusButton from "../change_status_button/change_status_button";

class TableRow extends React.Component {
	render() {
		const attributes = this.props.rowData.attributes;

		return (
			<tr className='table-row'>
				<td className="align-middle">{this.props.rowData.id}</td>
				<td className="align-middle">{attributes.advertiser_name}</td>
				<td className="align-middle">{attributes.description}</td>
				<td className='align-middle text-center'>{this.renderAvailabilitySwitch()}</td>
				<td className='align-middle text-center'>
					<div className="d-inline-block mr-2">
						{this.renderDeleteButton()}
					</div>
				</td>
				<td className='align-middle text-center'>
					<div className='d-inline-block'>
						{this.renderEditButton()}
					</div>
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

	renderAvailabilitySwitch = () => {
		return (
			<ChangeStatusButton
				resourceId={this.props.rowData.id}
				handleSuccess={this.props.handleStatusChangeSuccess}
				isAvailable={this.props.rowData.attributes.available}/>
		);
	}
}

TableRow.propTypes = {
	handleDeleteSuccess: PropTypes.func.isRequired,
	handleStatusChangeSuccess: PropTypes.func.isRequired,
	rowData: PropTypes.object.isRequired,
};

export default TableRow
