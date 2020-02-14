import React from 'react'
import View from "../../view/view";
import {apiClient} from "../../../api/api_client";

class AuthenticatedView extends React.Component {
	componentDidMount() {
		apiClient.validateAccessTokenPresence();
	}

	render() {
		return (
			<View>
				{this.props.children}
			</View>
		);
	}
}

export default AuthenticatedView
