import React from 'react'
import Table from 'react-bootstrap/Table';
import CreateButton from "../create_button/create_button";
import TableHeader from "../table_header/table_header";
import TableBody from "../table_body/table_body";
import {apiClient} from "../../../../api/api_client";
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
						handleStatusChangeSuccess={() => this.fetchComponentData()}
						handleDeleteSuccess={() => this.fetchComponentData()}/>
				</Table>
			</div>
		);
	}

	fetchComponentData() {
		apiClient.fetch('/offers?fetch_all=true')
			.then(response => response.json())
			.then(jsonResponse => this.mapResponseIntoState(jsonResponse))
			.then(newState => this.setState(newState))
	}

	mapResponseIntoState(jsonResponse) {
		return Promise.resolve({tableRows: jsonResponse.data});
	}
}

export default DataGrid
