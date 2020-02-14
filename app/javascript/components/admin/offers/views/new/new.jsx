import React from 'react'
import CreateForm from "../../create_form/create_form";
import AuthenticatedView from "../../../authenticated_view/authenticated_view";

const New = () => {
	return (
		<AuthenticatedView>
			<CreateForm/>
		</AuthenticatedView>
	);
};

export default New
