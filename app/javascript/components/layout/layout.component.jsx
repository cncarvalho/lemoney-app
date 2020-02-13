import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './layout.styles.scss';

class Layout extends React.Component {
	render() {
		return (
			<div>
				<header>
					<Navbar fixed='top'>
						<Navbar.Brand>
							<img src="/brand.svg" alt="Lemoney"/>
						</Navbar.Brand>
					</Navbar>
				</header>
				<main>
					<Container fluid>
						{this.props.children}
					</Container>
				</main>
			</div>
		);
	}
}

export default Layout
