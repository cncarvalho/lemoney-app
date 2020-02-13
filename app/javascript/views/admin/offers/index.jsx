import React from 'react'
import View from "../../../components/view/view";
import DataGrid from "../../../components/admin/offers/data_grid/data_grid.component";

const Index = () => {
	return (
		<View title='Offers'>
			<DataGrid fetchUrl='http://localhost:3001/offers'/>
		</View>
	);
};

export default Index
