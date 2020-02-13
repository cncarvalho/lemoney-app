import React from 'react'
import Table from 'react-bootstrap/Table';
import CreateButton from "../create_button/create_button";
import TableHeader from "../table_header/table_header";
import TableBody from "../table_body/table_body";
import './data_grid.scss'

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
			<div className='data-grid'>
				<div className="float-right">
					<CreateButton/>
				</div>
				<Table>
					<TableHeader/>
					<TableBody
						tableRows={this.state.tableRows}
						handleDeleteSuccess={() => this.fetchComponentData()}/>
				</Table>
			</div>
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
