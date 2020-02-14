import React from 'react'
import Layout from "../layout/layout";
import Header from "./header/header";
import './view.scss';

class View extends React.Component {
	render() {
		return (
			<Layout>
				<div className="view">
					<Header/>
					<div className="content">
						{this.props.children}
					</div>
				</div>
			</Layout>
		);
	}
}

export default View
