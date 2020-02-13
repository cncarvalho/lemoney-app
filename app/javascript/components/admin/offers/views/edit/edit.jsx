import React from 'react'
import View from "../../../../view/view";
import PropTypes from "prop-types";
import EditForm from "../../edit_form/edit_form";

const Edit = ({resourceId}) => {
	return (
		<View>
			<EditForm resourceId={resourceId}/>
		</View>
	);
};

export default Edit
