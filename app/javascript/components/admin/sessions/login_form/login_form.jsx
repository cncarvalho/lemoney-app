import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {toast} from "react-toastify";
import {apiClient} from "../../../../api/api_client";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	render() {
		return (
			<Form onSubmit={(e) => this.handleSubmit(e)}>
				<Form.Group>
					<Form.Label>E-mail</Form.Label>
					<Form.Control
						type="email"
						onChange={(e) => this.handleInputChange(e)}
						name='email'/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						onChange={(e) => this.handleInputChange(e)}
						name='password'/>
				</Form.Group>

				<Row>
					<Col className='text-right'>
						<Button variant="outline-success" type="submit">
							Login
						</Button>
					</Col>
				</Row>
			</Form>
		);
	}

	handleInputChange = e => {
		const newState = {...this.state, [e.target.name]: e.target.value};
		this.setState(newState);
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const requestPath = '/auth/sign_in';
		const requestBody = JSON.stringify(this.state);
		const requestHeaders = {Accept: 'application/json', 'Content-Type': 'application/json'};
		const requestOptions = {method: 'POST', headers: requestHeaders, body: requestBody};

		apiClient.fetch(requestPath, requestOptions)
			.then(response => this.handleResponse(response));
	};

	handleResponse = (response) => {
		if (response.ok) {
			apiClient.storeAuthenticationHeaders(response.headers);
			return this.redirectUser();
		} else if (response.status === 401) {
			return toast.error('Invalid login credentials. Please try again.');
		} else {
			return toast.error('An error has occurred');
		}
	};

	redirectUser() {
		window.location.href = '/admin/offers';
	}
}

export default LoginForm
