import React from 'react'
import Table from 'react-bootstrap/Table';
import TableBody from "./table_body.component";
import TableHeader from "./table_header.component";

class DataGrid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tableRows: []
		}
	}

	componentDidMount() {
		this.fetchComponentData();
	}

	render() {
		return (
			<Table responsive striped hover>
				<TableHeader/>
				<TableBody
					tableRows={this.state.tableRows}
					handleDeleteSuccess={() => this.fetchComponentData()}/>
			</Table>
		);
	}

	fetchComponentData() {
		const fetchUrl = `${Api.address}/offers`;

		fetch(fetchUrl)
			.then(response => response.json())
			.then(jsonResponse => this.mapResponseIntoState(jsonResponse))
			.then(newState => this.setState(newState))
	}

	mapResponseIntoState(jsonResponse) {
		return Promise.resolve({tableRows: jsonResponse.data});
	}
}

export default DataGrid
