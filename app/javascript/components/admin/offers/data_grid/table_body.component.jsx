import React from 'react'
import PropTypes from 'prop-types';
import TableRow from "./table_row.component";

class TableBody extends React.Component {
	render() {
		return (
			<tbody>{this.renderRows()}</tbody>
		);
	}

	renderRows = () => this.props.tableRows.map(this.renderRow);

	renderRow = (rowData, key) => <TableRow key={key} rowData={rowData}/>;
}

TableBody.propTypes = {
	tableRows: PropTypes.array.isRequired
};

export default TableBody
