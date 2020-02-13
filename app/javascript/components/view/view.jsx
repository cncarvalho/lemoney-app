import React from 'react'
import Layout from "../layout/layout.component";

class View extends React.Component {
	render() {
		return (
			<Layout>
				{this.props.children}
			</Layout>
		);
	}
}

export default View
