import React from 'react'
import Button from 'react-bootstrap/Button';

class CreateButton extends React.Component {
	render() {
		return (
			<Button variant="primary" href={`/admin/offers/new`}>
				Create offer
			</Button>
		);
	}
}

export default CreateButton
