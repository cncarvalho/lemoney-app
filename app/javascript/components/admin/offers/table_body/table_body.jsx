import React from 'react'
import PropTypes from 'prop-types';
import TableRow from "../table_row/table_row";

class TableBody extends React.Component {
	render() {
		return (
			<tbody>{this.renderRows()}</tbody>
		);
	}

	renderRows = () => this.props.tableRows.map(this.renderRow);

	renderRow = (rowData, key) => {
		return (
			<TableRow
				key={key}
				rowData={rowData}
				handleStatusChangeSuccess={this.props.handleStatusChangeSuccess}
				handleDeleteSuccess={this.props.handleDeleteSuccess}/>
		);
	};
}

TableBody.propTypes = {
	handleDeleteSuccess: PropTypes.func.isRequired,
	handleStatusChangeSuccess: PropTypes.func.isRequired,
	tableRows: PropTypes.array.isRequired,
};

export default TableBody
