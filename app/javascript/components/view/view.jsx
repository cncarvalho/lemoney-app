import React from 'react'
import Layout from "../layout/layout";
import './view.scss';

class View extends React.Component {
	render() {
		return (
			<Layout>
				<div className="view">
					<div className="header">
						<img src="/brand.svg" alt="Lemoney"/>
					</div>
					<div className="content">
						{this.props.children}
					</div>
				</div>
			</Layout>
		);
	}
}

export default View
