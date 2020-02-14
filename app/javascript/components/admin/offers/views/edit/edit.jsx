import React from 'react'
import EditForm from "../../edit_form/edit_form";
import AuthenticatedView from "../../../authenticated_view/authenticated_view";

const Edit = ({resourceId}) => {
	return (
		<AuthenticatedView>
			<EditForm resourceId={resourceId}/>
		</AuthenticatedView>
	);
};

export default Edit
