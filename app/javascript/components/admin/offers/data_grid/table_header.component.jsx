import React from 'react'

class TableHeader extends React.Component {
	render() {
		return (
			<thead>
			<tr>
				<th>#</th>
				<th>Advertiser name</th>
				<th>URL</th>
				<th className='text-center'>Available?</th>
				<th>Actions</th>
			</tr>
			</thead>
		);
	}
}

export default TableHeader
