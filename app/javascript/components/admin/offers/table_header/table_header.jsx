import React from 'react';
import './table_header.scss';

class TableHeader extends React.Component {
	render() {
		return (
			<thead className='table-header'>
			<tr>
				<th>ID</th>
				<th>Advertiser name</th>
				<th>URL</th>
				<th className='text-center'>Available?</th>
				<th></th>
				<th></th>
			</tr>
			</thead>
		);
	}
}

export default TableHeader
