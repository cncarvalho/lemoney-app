import React from 'react'
import Table from 'react-bootstrap/Table';
import TableBody from "./table_body.component";
import TableHeader from "./table_header.component";
import CreateButton from "./create_button.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
			<div>
				<div className='mb-4 float-right'>
					<CreateButton/>
				</div>
				<Table responsive striped hover>
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
