import React from 'react'
import DataGrid from "../../data_grid/data_grid";
import AuthenticatedView from "../../../authenticated_view/authenticated_view";

const Index = () => {
	return (
		<AuthenticatedView>
			<DataGrid/>
		</AuthenticatedView>
	);
};

export default Index
