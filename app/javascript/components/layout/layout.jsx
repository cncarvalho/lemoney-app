import React from 'react'
import Container from "react-bootstrap/Container";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './layout.scss'
import Navbar from "react-bootstrap/Navbar";

class Layout extends React.Component {
	render() {
		return (
			<div className='layout'>
				<main>
					<Container>
						{this.props.children}
					</Container>
					<ToastContainer/>
				</main>
			</div>
		);
	}
}

export default Layout
