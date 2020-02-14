import React from 'react'
import Button from 'react-bootstrap/Button';

class CreateButton extends React.Component {
	render() {
		return (
			<Button variant="outline-success" href={`/admin/offers/new`}>
				Create offer
			</Button>
		);
	}
}

export default CreateButton
