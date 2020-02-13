import React from 'react'
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Layout from "../layout/layout.component";

class View extends React.Component {
	render() {
		return (
			<Layout>
				<Card>
					<Card.Body>
						<Card.Title>{this.props.title}</Card.Title>
						{this.props.children}
					</Card.Body>
				</Card>
			</Layout>
		);
	}
}

View.propTypes = {
	title: PropTypes.string.isRequired
};

export default View
