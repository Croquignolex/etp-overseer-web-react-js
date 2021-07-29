import {connect} from "react-redux";

import CompanyNewComponent from "../../components/companies/CompanyNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.companiesRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CompanyNewComponent);