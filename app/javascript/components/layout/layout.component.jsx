import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
					<Container>
						{this.props.children}
						<ToastContainer />
					</Container>
				</main>
			</div>
		);
	}
}

export default Layout
